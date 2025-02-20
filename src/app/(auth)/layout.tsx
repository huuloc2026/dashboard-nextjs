import { Toaster } from "sonner";

export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <h1>Auth layout</h1>
      {children}
    </main>
  );
}
