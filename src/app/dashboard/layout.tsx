import Sidebar from "@/app/components/Sidebar";

export default function DashBoardLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Sidebar />
      {children}
    </main>
  );
}
