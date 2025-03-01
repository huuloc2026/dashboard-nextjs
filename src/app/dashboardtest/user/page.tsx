import { ChartUser } from "@/app/components/ChartUser";
import UserListPagination from "@/app/components/UserList";

import { ProductList } from "@/app/dashboardtest/product/ProductList";
import UserForm from "@/app/dashboardtest/user/UserForm";
import React from "react";

export const UserPage = () => {
  const arrayList: any[] = [];
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
          <UserListPagination />
        </div>
      </div>
    </>
  );
};
export default UserPage;
