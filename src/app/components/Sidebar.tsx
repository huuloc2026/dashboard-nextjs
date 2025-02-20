"use client";
import { Home, User, PackageSearch, Wallet, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import avatar from "/public/Fedora.png"; // Thay bằng đường dẫn ảnh thực tế
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-card h-screen p-4 hidden lg:flex flex-col border-r border-border">
      {/* Logo */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Admin Dashboard</h2>

      {/* Avatar + User */}
      <div className="flex items-center bg-muted p-3 rounded-lg mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
          <Image
            src={avatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <h3 className="ml-3 text-lg font-semibold text-muted-foreground">
          Hello, user!
        </h3>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard/"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/product"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <PackageSearch className="mr-2 h-4 w-4" />
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <User className="mr-2 h-4 w-4" />
              User
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/billing"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Billing
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/setting"
              className="flex items-center w-full p-2 rounded-lg hover:bg-muted"
            >
              <Settings className="mr-2 h-4 w-4" />
              Setting
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
