"use client";

import { Home, User, BarChart2, PlusCircle, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState, useEffect } from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-card h-screen p-4 hidden lg:block border-r border-border">
      <h2 className="text-2xl font-bold mb-6 text-primary">Admin Dashboard </h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Post
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              User
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Listings
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
