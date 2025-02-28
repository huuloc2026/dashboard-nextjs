"use client";

import { ApiRequest } from "@/app/apiRequest/apiRequest";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface AuthContextType {
  token: string | null;
  // login: (email: string, password: string) => Promise<void>;
  // logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);

  useLayoutEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) throw new Error("Unauthorized");

        const data = await response.json();
        setToken(data.token);
      } catch (error) {
        console.error("Not logged in");
        setToken(null);
      }
    }

    fetchToken();
  }, []);

  async function login(email: string, password: string) {
    const user = await ApiRequest.getInstance().login(email, password);
    setToken(user.token);
  }

  async function logout() {
    await ApiRequest.getInstance().logout();
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
