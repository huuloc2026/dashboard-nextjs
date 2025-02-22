import Sidebar from "@/app/components/Sidebar";

export default function DashBoardLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex min-h-screen bg-background text-foreground">
        {/* Sidebar bên trái */}
        <Sidebar />

        {/* Nội dung chính */}
        <main className="container mx-auto p-5 flex flex-col ">
          <div className="flex flex-col min-h-screen p-2 ">{children}</div>
        </main>
      </div>
    </div>
  );
}
