import { ChartArea } from "@/app/components/chart-area";
import ProductCRUD from "@/app/dashboard/product/ProductForm";
import Productlist from "@/app/dashboard/product/Productlist";
import React from "react";

export const UserPage = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-6 gap-4 ">
        <div className="col-span-2 row-span-2  ">
          User Layout updating....
          <ProductCRUD />
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <ChartArea />
        </div>
        <div className="col-span-4 row-span-4 row-start-3">
          <Productlist />
        </div>
      </div>
    </>
  );
};
export default UserPage;
