import { ChartUser } from "@/app/components/ChartUser";
import UserListPagination from "@/app/components/UserList";

import UserForm from "@/app/dashboard/user/UserForm";
import { fetchToken } from "@/utils/FetchToken";
import { FetchUserPagination } from "@/utils/httpRequest";
import React from "react";
export interface UserPageProps {
  data: any;
  limit: number;
  page: number;
  total: number;
}
interface ParamsProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}
const UserPage = async ({ searchParams }: ParamsProps) => {
  const Param = await searchParams;
  const token = await fetchToken();
  if (!token) return;
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = parseInt(searchParams?.limit || "10", 10);

  try {
    const { data } = await FetchUserPagination(token, page, limit);
    const arrayList = data || [];

    return (
      <div className="grid grid-cols-4 grid-rows-6 gap-4">
        <div className="col-span-2 row-span-2">
          <UserForm />
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <ChartUser />
        </div>
        <div className="col-span-4 row-span-4 row-start-3">
          <UserListPagination arrayList={arrayList} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return <p>Error loading user data</p>;
  }
};
export default UserPage;
