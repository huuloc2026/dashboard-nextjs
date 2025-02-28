"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  UserRound,
  Mail,
  ShoppingCart,
  CreditCard,
  ArrowRight,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import { ApiRequest } from "@/app/apiRequest/apiRequest";
import { useAuth } from "@/app/AuthProvider";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  balance: string;
}

interface UserListProps {
  totalBalance?: string;
  className?: string;
}

const INITIAL_USERS: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@mail.com",
    avatar: "/user.svg",
    balance: "$10,500.75",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@mail.com",
    avatar: "/user.svg",
    balance: "$7,320.00",
  },
  {
    id: "3",
    name: "Charlie Lee",
    email: "charlie@mail.com",
    avatar: "/user.svg",
    balance: "$15,200.90",
  },
  {
    id: "4",
    name: "Diana Kim",
    email: "diana@mail.com",
    avatar: "/user.svg",
    balance: "$5,879.65",
  },
  {
    id: "5",
    name: "Ethan Brown",
    email: "ethan@mail.com",
    avatar: "/user.svg",
    balance: "$2,430.20",
  },
];

export default function UserList({
  totalBalance = "$41,331.50",
  className,
}: UserListProps) {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  const addUser = () => {
    const name = prompt("Enter user name:");
    const email = prompt("Enter user email:");
    const balance = prompt("Enter user balance:");
    if (name && email && balance) {
      setUsers([
        ...users,
        { id: crypto.randomUUID(), name, email, balance, avatar: "/user.svg" },
      ]);
    }
  };

  const editUser = (id: string) => {
    const user = users.find((u) => u.id === id);
    if (!user) return;
    const name = prompt("Edit name:", user.name);
    const email = prompt("Edit email:", user.email);
    const balance = prompt("Edit balance:", user.balance);
    if (name && email && balance) {
      setUsers(
        users.map((u) => (u.id === id ? { ...u, name, email, balance } : u))
      );
    }
  };

  const deleteUser = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };
  const { token } = useAuth();
  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) return;
      const data = await ApiRequest.getInstance().getUser(token);
      // fetch 5 user
      const fiveUser = data.data;
      const datane = fiveUser.slice(0, 5);
      setUsers(datane);
    };
    fetchProducts();
  }, [token]);

  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto",
        "bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl",
        className
      )}
    >
      {/* Total Balance Section */}
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Total Balance
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {totalBalance}
        </h1>
      </div>

      {/* Users List */}
      <div className="p-3">
        <h2 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          User List
        </h2>

        <div className="space-y-1">
          {users.map((user) => (
            <div
              key={user.id}
              className="group flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200"
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => editUser(user.id)}
              >
                <img
                  src="/user.svg"
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />

                <div>
                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {user.name}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                  {user.balance}
                </span>
                <button
                  className="text-blue-600 dark:text-blue-400"
                  onClick={() => editUser(user.id)}
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  className="text-red-600 dark:text-red-400"
                  onClick={() => deleteUser(user.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
          <div className="grid grid-cols-4 gap-2">
            <button
              type="button"
              className={cn(
                "flex items-center justify-center gap-2",
                "py-2 px-3 rounded-lg",
                "text-xs font-medium",
                "bg-zinc-900 dark:bg-zinc-50",
                "text-zinc-50 dark:text-zinc-900",
                "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                "shadow-sm hover:shadow",
                "transition-all duration-200"
              )}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
            <button
              type="button"
              className={cn(
                "flex items-center justify-center gap-2",
                "py-2 px-3 rounded-lg",
                "text-xs font-medium",
                "bg-zinc-900 dark:bg-zinc-50",
                "text-zinc-50 dark:text-zinc-900",
                "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                "shadow-sm hover:shadow",
                "transition-all duration-200"
              )}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Buy</span>
            </button>
            <button
              type="button"
              className={cn(
                "flex items-center justify-center gap-2",
                "py-2 px-3 rounded-lg",
                "text-xs font-medium",
                "bg-zinc-900 dark:bg-zinc-50",
                "text-zinc-50 dark:text-zinc-900",
                "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                "shadow-sm hover:shadow",
                "transition-all duration-200"
              )}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay</span>
            </button>
            <button
              type="button"
              className={cn(
                "flex items-center justify-center gap-2",
                "py-2 px-3 rounded-lg",
                "text-xs font-medium",
                "bg-zinc-900 dark:bg-zinc-50",
                "text-zinc-50 dark:text-zinc-900",
                "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                "shadow-sm hover:shadow",
                "transition-all duration-200"
              )}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>More</span>
            </button>
          </div>
        </div>

        {/* CRUD Buttons */}
        {/* <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
          <div className="grid grid-cols-4 gap-2">
            <button
              type="button"
              onClick={addUser}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm hover:shadow transition-all duration-200"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm hover:shadow transition-all duration-200"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Buy</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm hover:shadow transition-all duration-200"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center py-2 px-3 rounded-lg bg-gray-800 text-white"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>More</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
