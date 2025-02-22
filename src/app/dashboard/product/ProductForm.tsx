"use client";
import React, { useEffect, useState } from "react";
import { apiRequest } from "@/utils/apiRequest";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface formData {
  name: string;
  price: number;
  description: string;
  categories: string;
}

let productsData: formData[] = [
  {
    name: "Laptop Pro X1",
    price: 1200,
    description: "High-performance laptop with powerful specs.",
    categories: "Electronics, Computers",
  },
  {
    name: "Coffee Maker Deluxe",
    price: 89.99,
    description: "Automatic coffee maker with programmable timer.",
    categories: "Home Appliances, Kitchen",
  },
  {
    name: "Running Shoes - Ultra Boost",
    price: 110.5,
    description: "Lightweight and comfortable running shoes.",
    categories: "Sports, Shoes",
  },
  {
    name: "Smartphone Z50",
    price: 799,
    description: "Latest smartphone with advanced camera features.",
    categories: "Electronics, Mobile",
  },
  {
    name: "Cookbook - World Cuisine",
    price: 25,
    description: "A collection of delicious recipes from around the world.",
    categories: "Books, Cooking",
  },
];

const ProductCRUD = () => {
  const [products, setProducts] = useState(productsData);
  const [formData, setFormData] = useState<formData[]>();
  const [editingId, setEditingId] = useState(null);

  //   useEffect(() => {
  //     fetchProducts();
  //   }, []);

  //   const fetchProducts = async () => {
  //     try {
  //       //   const data = await apiRequest("/products");
  //       //   setProducts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch products", error);
  //     }
  //   };

  const handleInputChange = () => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    // try {
    //   if (editingId) {
    //     await apiRequest(`/products/${editingId}`, "PUT", formData);
    //   } else {
    //     await apiRequest("/products", "POST", formData);
    //   }
    //   setFormData({ name: "", price: "" });
    //   setEditingId(null);
    //   fetchProducts();
    // } catch (error) {
    //   console.error("Failed to save product", error);
    // }
  };

  const handleEdit = () => {
    // setFormData({ name: product.name, price: product.price });
    // setEditingId(product.id);
  };

  //   const handleDelete = async (id) => {
  //     // try {
  //     //   await apiRequest(`/products/${id}`, "DELETE");
  //     //   fetchProducts();
  //     // } catch (error) {
  //     //   console.error("Failed to delete product", error);
  //     // }
  //   };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{"Add Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Product Name"
              value={""}
              onChange={handleInputChange}
              required
            />
            <Input
              name="price"
              type="number"
              placeholder="19.02"
              value={""}
              onChange={handleInputChange}
              required
            />
            <Input
              name="description"
              type="text"
              placeholder="description"
              value={""}
              onChange={handleInputChange}
              required
            />
            <Input
              name="catogories"
              type="text"
              placeholder="catogories"
              value={""}
              onChange={handleInputChange}
              required
            />

            <Button type="submit" className="w-full">
              {"Add"} Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCRUD;
