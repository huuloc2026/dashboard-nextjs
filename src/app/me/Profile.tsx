"use client";
import { useAppContext } from "@/app/AppProvider";
import React from "react";

const Profile = () => {
  const { accessToken } = useAppContext();

  return (
    <div className="text-white ">
      {accessToken ? `Your token: ${accessToken}` : "No token found"}
    </div>
  );
};

export default Profile;
