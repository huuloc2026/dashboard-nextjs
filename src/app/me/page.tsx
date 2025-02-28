import { ApiRequest } from "@/app/apiRequest/apiRequest";
import Profile from "@/app/me/Profile";

import { cookies } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  const token = accessToken?.value as string;

  let data: { email: string } = { email: "Guest" };
  if (accessToken) {
    data = await ApiRequest.getInstance().profile(token);
  } else {
    data = { email: "Guest" };
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
