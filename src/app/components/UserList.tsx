"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

import { DiaLogUser } from "@/app/dashboard/user/DialogEditUser";
import { toast } from "sonner";
import { useState } from "react";
import { DialogDeleteUser } from "@/app/dashboard/user/DiaLogDelete";

const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "ACTIVE",
    createdAt: "2024-01-10",
    updateAt: "2024-01-10",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    status: "INACTIVE",
    createdAt: "2024-02-12",
    updateAt: "2024-02-15",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Client",
    status: "ACTIVE",
    createdAt: "2024-02-11",
    updateAt: "2024-03-01",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    role: "Seller",
    status: "PENDING",
    createdAt: "2024-03-08",
    updateAt: "2024-03-10",
  },
  {
    id: 5,
    name: "Emma Watson",
    email: "emma@example.com",
    role: "Admin",
    status: "ACTIVE",
    createdAt: "2024-03-14",
    updateAt: "2024-04-01",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank@example.com",
    role: "Seller",
    status: "INACTIVE",
    createdAt: "2024-04-20",
    updateAt: "2024-05-01",
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace@example.com",
    role: "Seller",
    status: "ACTIVE",
    createdAt: "2024-05-25",
    updateAt: "2024-06-01",
  },
  {
    id: 8,
    name: "Henry Adams",
    email: "henry@example.com",
    role: "Admin",
    status: "PENDING",
    createdAt: "2024-06-30",
    updateAt: "2024-07-01",
  },
  {
    id: 9,
    name: "Ivy Thompson",
    email: "ivy@example.com",
    role: "Client",
    status: "ACTIVE",
    createdAt: "2024-05-02",
    updateAt: "2024-05-15",
  },
  {
    id: 10,
    name: "Jack White",
    email: "jack@example.com",
    role: "Seller",
    status: "INACTIVE",
    createdAt: "2024-06-15",
    updateAt: "2024-06-20",
  },
];
const dataUsers = mockUsers;
export default function UserListPagination() {
  const handleExtractId = (userId: number) => {
    console.log("User ID:", userId);
  };
  return (
    <main className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <div className="rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search users..."
              className="max-w-xs"
            />
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="seller">Seller</SelectItem>
                <SelectItem value="client">Client</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-sm ">Showing 1-10 of 100 results</div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell>{user.updateAt}</TableCell>
                <TableCell className="text-right">
                  <DiaLogUser user={user} />

                  <DialogDeleteUser user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing 1-10 of 100 results
          </div>
        </div>
      </div>
    </main>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
