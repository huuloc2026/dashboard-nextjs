import { ChartUser } from "@/app/components/ChartUser";
import UserListPagination from "@/app/components/UserList";

import UserForm from "@/app/dashboard/user/UserForm";
import { fetchToken } from "@/utils/FetchToken";
import React from "react";

export const UserPage = async () => {
  const token = await fetchToken();
  const response = await fetch("http://localhost:8386/v1/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const userFromFetch = await response.json();

  const arrayList = userFromFetch.data;

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-6 gap-4 ">
        <div className="col-span-2 row-span-2  ">
          <UserForm />
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <ChartUser />
        </div>
        <div className="col-span-4 row-span-4 row-start-3">
          <UserListPagination arrayList={arrayList} />
        </div>
      </div>
    </>
  );
};
export default UserPage;
