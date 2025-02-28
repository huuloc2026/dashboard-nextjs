"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
export interface formData {
  id: string;
  name: string;
  price: number;
  stock: number;
  imageUrl: any;
  categoryId: string;
  status: string;
  description: string;
  categories: string;
  createdAt: string;
  updatedAt: string;
}

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
let productRenderJSON = [
  {
    id: "2af85ba0-0d4d-4b42-8e6e-297646c79e34",
    name: "Modern Marble Mouse",
    description:
      "Stylish Shoes designed to make you stand out with meager looks",
    price: 391.41,
    stock: 38,
    imageUrl: null,
    categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
    status: "ACTIVE",
    createdAt: "2025-02-28T11:18:13.997Z",
    updatedAt: "2025-02-28T11:18:13.997Z",
  },
  {
    id: "332ab3db-c575-4182-b075-a4d38975f03a",
    name: "Fresh Marble Shoes",
    description:
      "New Gloves model with 38 GB RAM, 360 GB storage, and friendly features",
    price: 499.09,
    stock: 91,
    imageUrl: null,
    categoryId: "eb17be2b-6809-4811-83a6-173ede6c46d0",
    status: "ACTIVE",
    createdAt: "2025-02-28T11:18:13.997Z",
    updatedAt: "2025-02-28T11:18:13.997Z",
  },
  {
    id: "4479f705-2549-45f1-9235-afe6b380cdd1",
    name: "Frozen Silk Pants",
    description:
      "Savor the crunchy essence in our Car, designed for honored culinary adventures",
    price: 533.45,
    stock: 34,
    imageUrl: null,
    categoryId: "ac85a058-48b1-44b4-8883-8c7e99e2d5a6",
    status: "ACTIVE",
    createdAt: "2025-02-28T11:18:13.997Z",
    updatedAt: "2025-02-28T11:18:13.997Z",
  },
  {
    id: "62633db9-903c-4d6d-810c-df5e0dd7bbfe",
    name: "Electronic Aluminum Shoes",
    description:
      "The Future-proofed well-modulated approach Pants offers reliable performance and vain design",
    price: 605.69,
    stock: 28,
    imageUrl: null,
    categoryId: "d94f2730-e9cf-44e8-8e7a-f1fa129dc463",
    status: "ACTIVE",
    createdAt: "2025-02-28T11:18:13.997Z",
    updatedAt: "2025-02-28T11:18:13.997Z",
  },
];

// let productsData: formData[] = [
//   {
//     name: "Laptop Pro X1",
//     price: 1200,
//     description: "High-performance laptop with powerful specs.",
//     categories: "Electronics, Computers",
//   },
//   {
//     name: "Coffee Maker Deluxe",
//     price: 89.99,
//     description: "Automatic coffee maker with programmable timer.",
//     categories: "Home Appliances, Kitchen",
//   },
//   {
//     name: "Running Shoes - Ultra Boost",
//     price: 110.5,
//     description: "Lightweight and comfortable running shoes.",
//     categories: "Sports, Shoes",
//   },
//   {
//     name: "Smartphone Z50",
//     price: 799,
//     description: "Latest smartphone with advanced camera features.",
//     categories: "Electronics, Mobile",
//   },
//   {
//     name: "Cookbook - World Cuisine",
//     price: 25,
//     description: "A collection of delicious recipes from around the world.",
//     categories: "Books, Cooking",
//   },
// ];
const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
  imageUrl: z.string().nullable(),
  categoryId: z.string().uuid(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

const formSchema = z.object({
  product: productSchema,
});
const ProductCRUD = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [products, setProducts] = useState(productRenderJSON);
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
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // try {
    //   const api = ApiRequest.getInstance();
    //   await api.login(values.email, values.password);
    //   toast.success("Login successful!");
    //   router.push("/dashboard");
    //   // setAccessToken(data);
    //   // console.log("Success:", result);
    // } catch (error: any) {
    //   toast.error(error.message || "Failed to submit the form.");
    // }
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{"Add Product"}</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              noValidate
            >
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="product.name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Product Name"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCRUD;
