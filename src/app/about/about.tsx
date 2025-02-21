import Marquee from "@/app/components/Marquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const About = () => {
  return (
    <>
      <div className="space-x-10 p-2">
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
        <Button asChild>
          <Link href="/verify">verify</Link>
        </Button>
      </div>
      <div>
        <Marquee />
      </div>
    </>
  );
};

export default About;
