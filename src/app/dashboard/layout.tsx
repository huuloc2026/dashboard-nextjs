import Sidebar from "@/app/components/Sidebar";

export default function DashBoardLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
