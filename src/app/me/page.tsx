import Profile from "@/app/me/Profile";
import { apiRequest } from "@/utils/apiRequest";
import { cookies } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");

  let data: { email: string } = { email: "Guest" }; // Giá trị mặc định

  try {
    const API_URL = "http://localhost:8386/v1/api/auth/me";
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return "Error fetching data";
    }

    data = await response.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="text-white">
      Hello, {data.email}
      <br />
      <div>{accessToken ? <Profile /> : null}</div>
    </div>
  );
};

export default ProfilePage;
