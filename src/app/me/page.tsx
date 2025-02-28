import { ApiRequest } from "@/app/apiRequest/apiRequest";
import { fetchProfile } from "@/app/me/fetchProfile";
import Profile from "@/app/me/Profile";

import { cookies } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const data = await fetchProfile();
  return (
    <div className="text-white">
      Hello, {data.email}
      <br />
      <div>{data ? <Profile /> : null}</div>
    </div>
  );
};

export default ProfilePage;
