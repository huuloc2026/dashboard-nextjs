import { Button } from "@/components/ui/button";
import React from "react";
export interface formData {
  id: string;
  name: string;
  price: number;
  description: string;
  categories: string;
}

let productsData: formData[] = [
  {
    id: "1",
    name: "Laptop Pro X1",
    price: 1200,
    description: "High-performance laptop with powerful specs.",
    categories: "Electronics, Computers",
  },
  {
    id: "2",
    name: "Coffee Maker Deluxe",
    price: 89.99,
    description: "Automatic coffee maker with programmable timer.",
    categories: "Home Appliances, Kitchen",
  },
  {
    id: "3",
    name: "Running Shoes - Ultra Boost",
    price: 110.5,
    description: "Lightweight and comfortable running shoes.",
    categories: "Sports, Shoes",
  },
  {
    id: "4",
    name: "Smartphone Z50",
    price: 799,
    description: "Latest smartphone with advanced camera features.",
    categories: "Electronics, Mobile",
  },
  {
    id: "5",
    name: "Cookbook - World Cuisine",
    price: 25,
    description: "A collection of delicious recipes from around the world.",
    categories: "Books, Cooking",
  },
];
const products = productsData;
const Productlist = () => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <>
      <div>
        <h2 className="text-xl font-bold py-[20px]">Product List</h2>
        <ul className="space-y-2">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center p-2 border rounded"
            >
              <span>
                {product.name} - ${product.price}
              </span>
              <div className="space-x-2">
                <Button size="sm">Edit</Button>
                <Button size="sm" variant="destructive">
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Productlist;
