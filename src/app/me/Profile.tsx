"use client";

import { useEffect, useState } from "react";

export default function UserInfo() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/auth/me");
        if (!response.ok) throw new Error("Unauthorized");

        const data = await response.json();
        setToken(data.token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    }

    fetchToken();
  }, []);

  return <div>Access Token: {token ? token : "Not logged in"}</div>;
}
