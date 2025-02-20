import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button asChild>
        <Link href="/register">Register</Link>
      </Button>

      <Button asChild>
        <Link href="/resetpassword">Change Password</Link>
      </Button>
      <Button asChild>
        <Link href="/me">me</Link>
      </Button>
    </>
  );
}
