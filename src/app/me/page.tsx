import { fetchProfile } from "@/app/me/fetchProfile";
import Profile from "@/app/me/Profile";

import React from "react";

const ProfilePage = async () => {
  const data = await fetchProfile();
  return (
    <>
      <div className="text-white">
        Hello, {data.name}
        <br />
        <div>{data ? <Profile /> : null}</div>
      </div>
    </>
  );
};

export default ProfilePage;
