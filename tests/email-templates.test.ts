import assert from "node:assert/strict";
import test from "node:test";

import { magicLinkEmail, welcomeEmail } from "../lib/email/templates";

test("magic-link email escapes the URL in HTML and preserves it in plain text", () => {
  const url = 'https://example.com/callback?next="><script>alert(1)</script>&mode=login';
  const email = magicLinkEmail(url);

  assert.equal(email.subject, "Your secure Smarrrt sign-in link");
  assert.match(email.html, /Sign in securely/);
  assert.ok(!email.html.includes("<script>alert(1)</script>"));
  assert.ok(
    email.html.includes(
      "&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;&amp;mode=login",
    ),
  );
  assert.ok(email.text.includes(url));
});

test("welcome email escapes user-controlled HTML values", () => {
  const email = welcomeEmail({
    name: 'Ada<&" Example',
    dashboardUrl: 'https://example.com/dashboard?tab="><admin>&source=email',
  });

  assert.ok(email.html.includes("Hi Ada&lt;&amp;&quot;,"));
  assert.ok(!email.html.includes("<admin>"));
  assert.ok(email.html.includes("&quot;&gt;&lt;admin&gt;&amp;source=email"));
  assert.ok(email.text.includes('Hi Ada<&",'));
});

test("welcome email uses a neutral greeting when no name is available", () => {
  const email = welcomeEmail({
    name: "   ",
    dashboardUrl: "https://example.com/dashboard",
  });

  assert.match(email.html, />Welcome,<\/p>/);
  assert.match(email.text, /^Welcome,/);
});
