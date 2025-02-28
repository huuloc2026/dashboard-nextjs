"use client";
import React, { JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Laptop,
  Smartphone,
  Headphones,
  Tv,
  Plus,
  ArrowRight,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { useAuth } from "@/app/AuthProvider";
import { ApiRequest } from "@/app/apiRequest/apiRequest";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  imageUrl: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const categoryIcons: Record<string, JSX.Element> = {
  "d94f2730-e9cf-44e8-8e7a-f1fa129dc463": (
    <Laptop className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
  ),
  "a83d9782-621f-4da3-8aca-05ad7d461213": (
    <Smartphone className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
  ),
  "eb17be2b-6809-4811-83a6-173ede6c46d0": (
    <Headphones className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
  ),
  "ac85a058-48b1-44b4-8883-8c7e99e2d5a6": (
    <Tv className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
  ),
};

interface ListProductProps {
  className?: string;
}

export default function ListProduct({ className }: ListProductProps) {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const { token } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) return;

      try {
        setLoading(true);
        setError(null);

        const response = await ApiRequest.getInstance().getProducts(token);

        if (response && response.data) {
          setProducts(response.data);
        } else {
          throw new Error("No data received from API");
        }
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  useEffect(() => {
    const total = products.reduce((sum, product) => sum + product.price, 0);
    setTotalBalance(total);
  }, [products]);

  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl",
        className
      )}
    >
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">Total Value</p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          ${totalBalance.toFixed(2)}
        </h1>
      </div>

      <div className="p-3">
        <h2 className="text-xs font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          Your Products
        </h2>
        {loading ? (
          <p className="text-xs text-center">Loading products...</p>
        ) : error ? (
          <p className="text-xs text-red-500 text-center">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-xs text-center text-zinc-600 dark:text-zinc-400">
            No products available.
          </p>
        ) : (
          <div className="space-y-1">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-700">
                    {categoryIcons[product.categoryId] || (
                      <Tv className="w-3.5 h-3.5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                        {product.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-2 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-4 gap-2">
        {[
          { icon: Plus, label: "Add" },
          { icon: ShoppingCart, label: "Buy" },
          { icon: CreditCard, label: "Pay" },
          { icon: ArrowRight, label: "More" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm hover:shadow transition-all duration-200"
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
