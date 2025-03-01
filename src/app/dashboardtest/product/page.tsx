import { ChartArea } from "@/app/components/chart-area";
import { fetchToken } from "@/app/dashboard-archive/product/fetchProduct";
import ProductCRUD from "@/app/dashboard-archive/product/ProductForm";
import ProductListPagination from "@/app/dashboardtest/product/ProductList";

export const ProductPage = async () => {
  const token = await fetchToken();
  const response = await fetch("http://localhost:8386/v1/api/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const productsFromFetch = await response.json();

  const arrayList = productsFromFetch.data;

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-6 gap-4 ">
        <div className="col-span-2 row-span-2">
          <ProductCRUD />
        </div>
        <div className="col-span-2 row-span-2 col-start-3">
          <ChartArea dataFromFetch={arrayList} />
        </div>
        <div className="col-span-4 row-span-4 row-start-3">
          <ProductListPagination dataFromFetch={arrayList} />
        </div>
      </div>
    </>
  );
};
export default ProductPage;
