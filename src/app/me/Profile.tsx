"use client";
import { useAppContext } from "@/app/AppProvider";
import React from "react";

const Profile = () => {
  const { accessToken } = useAppContext();

  return (
    <div className="text-white ">
      Your token is:
      <br />
      <div className="text-red-500 ">
        {accessToken ? ` ${accessToken}` : "No token found"}
      </div>
    </div>
  );
};

export default Profile;
