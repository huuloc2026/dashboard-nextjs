"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import fedoraLogo from "../../../public/husky-svgrepo-com.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Header() {
  const headerDraft = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      title: "Contact",
      link: "/contact",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "Register",
      link: "/register",
    },
  ];
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Huu Loc</span>
            <Image
              src={fedoraLogo}
              alt="CMS Dashboard Logo"
              width={50} // Set width (h-8 means 32px in tailwind)
              height={50} // Set height (w-auto, will scale proportionally)
            />
          </Link>
        </div>
        <div className="flex gap-x-12">
          {headerDraft.map((item) => {
            return (
              <Link
                href={item.link}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                <Button variant="ghost">{item.title}</Button>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
