import { auth } from "@/lib/auth";

export default async function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div data-authenticated={session?.user ? "true" : "false"}>{children}</div>
  );
}
