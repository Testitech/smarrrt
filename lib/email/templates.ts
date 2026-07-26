type EmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shell(content: string): string {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f4f6f8;color:#18211d;font-family:Inter,Arial,sans-serif">
    <div style="display:none;max-height:0;overflow:hidden">Smarrrt visa POF planning</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f8;padding:32px 16px">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #e2e8e4;border-radius:20px;overflow:hidden">
          <tr><td style="padding:28px 32px;background:#123c2e;color:#ffffff;font-size:25px;font-weight:800">Smarrrt</td></tr>
          <tr><td style="padding:36px 32px">${content}</td></tr>
          <tr><td style="padding:20px 32px;background:#f8faf9;color:#66736c;font-size:12px;line-height:1.6">Smarrrt helps you plan proof of funds. Always confirm final requirements with the relevant official authority before applying.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function button(label: string, href: string): string {
  return `<a href="${escapeHtml(href)}" style="display:inline-block;background:#1f7a54;color:#ffffff;text-decoration:none;font-weight:700;padding:14px 22px;border-radius:12px">${escapeHtml(label)}</a>`;
}

export function magicLinkEmail(url: string): EmailTemplate {
  return {
    subject: "Your secure Smarrrt sign-in link",
    html: shell(`
      <h1 style="margin:0 0 14px;font-size:28px;line-height:1.2">Sign in to Smarrrt</h1>
      <p style="margin:0 0 24px;color:#4d5b54;font-size:16px;line-height:1.7">Use the secure link below to continue to your proof-of-funds dashboard.</p>
      <p style="margin:0 0 24px">${button("Sign in securely", url)}</p>
      <p style="margin:0;color:#66736c;font-size:13px;line-height:1.6">This link can only be used once and expires automatically. If you did not request it, you can safely ignore this email.</p>
    `),
    text: `Sign in to Smarrrt\n\nUse this secure, one-time link:\n${url}\n\nIf you did not request it, you can ignore this email.`,
  };
}

export function welcomeEmail({
  name,
  dashboardUrl,
}: {
  name?: string | null;
  dashboardUrl: string;
}): EmailTemplate {
  const firstName = name?.trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Welcome,";

  return {
    subject: "Welcome to Smarrrt — build your POF plan",
    html: shell(`
      <p style="margin:0 0 10px;color:#1f7a54;font-weight:700">${greeting}</p>
      <h1 style="margin:0 0 14px;font-size:28px;line-height:1.2">Your proof-of-funds plan starts here</h1>
      <p style="margin:0 0 18px;color:#4d5b54;font-size:16px;line-height:1.7">Smarrrt turns your destination, intake date and current balance into a practical funding timeline you can revisit as your plans change.</p>
      <ul style="margin:0 0 26px;padding-left:20px;color:#4d5b54;font-size:15px;line-height:1.8">
        <li>Calculate a destination-specific target</li>
        <li>Save one reliable plan per intake</li>
        <li>Track the rate and rule version behind every result</li>
      </ul>
      <p style="margin:0">${button("Open my dashboard", dashboardUrl)}</p>
    `),
    text: `${firstName ? `Hi ${firstName},` : "Welcome,"}\n\nYour Smarrrt account is ready. Build and save your proof-of-funds plan here:\n${dashboardUrl}\n\nAlways confirm final requirements with the relevant official authority.`,
  };
}
