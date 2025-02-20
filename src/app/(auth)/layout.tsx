import { Toaster } from "sonner";

export default function Authlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
