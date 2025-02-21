import Marquee from "@/app/components/Marquee";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
      <Marquee />
    </main>
  );
}
