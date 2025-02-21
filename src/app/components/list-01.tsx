import { cn } from "@/lib/utils";
import {
  Laptop,
  Smartphone,
  Headphones,
  Tv,
  MousePointer,
  Plus,
  ArrowRight,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

interface ProductItem {
  id: string;
  title: string;
  description?: string;
  price: string;
  category: string;
}

interface List01Props {
  totalBalance?: string;
  products?: ProductItem[];
  className?: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "1",
    title: 'MacBook Pro 16"',
    description: "Apple M3 chip, 16GB RAM, 512GB SSD",
    price: "$2,499.00",
    category: "laptop",
  },
  {
    id: "2",
    title: "iPhone 15 Pro",
    description: "A17 Pro chip, 256GB storage",
    price: "$1,099.00",
    category: "smartphone",
  },
  {
    id: "3",
    title: "Sony WH-1000XM5",
    description: "Noise-canceling wireless headphones",
    price: "$399.99",
    category: "audio",
  },
  {
    id: "4",
    title: "Samsung 4K Smart TV",
    description: "55-inch QLED display, 120Hz refresh rate",
    price: "$899.00",
    category: "tv",
  },
  {
    id: "5",
    title: "Logitech MX Master 3S",
    description: "Wireless ergonomic mouse",
    price: "$99.99",
    category: "accessory",
  },
];

export default function List01({
  totalBalance = "$26,540.25",
  products = PRODUCTS,
  className,
}: List01Props) {
  return (
    <div
      className={cn(
        "w-full max-w-xl mx-auto",
        "bg-white dark:bg-zinc-900/70",
        "border border-zinc-100 dark:border-zinc-800",
        "rounded-xl shadow-sm backdrop-blur-xl",
        className
      )}
    >
      {/* Total Balance Section */}
      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">Total Value</p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {totalBalance}
        </h1>
      </div>

      {/* Products List */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
            Your Products
          </h2>
        </div>

        <div className="space-y-1">
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                "group flex items-center justify-between",
                "p-2 rounded-lg",
                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn("p-1.5 rounded-lg", {
                    "bg-blue-100 dark:bg-blue-900/30":
                      product.category === "laptop",
                    "bg-green-100 dark:bg-green-900/30":
                      product.category === "smartphone",
                    "bg-purple-100 dark:bg-purple-900/30":
                      product.category === "audio",
                    "bg-yellow-100 dark:bg-yellow-900/30":
                      product.category === "tv",
                    "bg-gray-100 dark:bg-gray-900/30":
                      product.category === "accessory",
                  })}
                >
                  {product.category === "laptop" && (
                    <Laptop className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  )}
                  {product.category === "smartphone" && (
                    <Smartphone className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                  )}
                  {product.category === "audio" && (
                    <Headphones className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  )}
                  {product.category === "tv" && (
                    <Tv className="w-3.5 h-3.5 text-yellow-600 dark:text-yellow-400" />
                  )}
                  {product.category === "accessory" && (
                    <MousePointer className="w-3.5 h-3.5 text-gray-600 dark:text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                    {product.title}
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
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated footer with action buttons */}
      <div className="p-2 border-t border-zinc-100 dark:border-zinc-800">
        <div className="grid grid-cols-4 gap-2">
          <button
            type="button"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-3 rounded-lg",
              "text-xs font-medium",
              "bg-zinc-900 dark:bg-zinc-50",
              "text-zinc-50 dark:text-zinc-900",
              "hover:bg-zinc-800 dark:hover:bg-zinc-200",
              "shadow-sm hover:shadow",
              "transition-all duration-200"
            )}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
          <button
            type="button"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-3 rounded-lg",
              "text-xs font-medium",
              "bg-zinc-900 dark:bg-zinc-50",
              "text-zinc-50 dark:text-zinc-900",
              "hover:bg-zinc-800 dark:hover:bg-zinc-200",
              "shadow-sm hover:shadow",
              "transition-all duration-200"
            )}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Buy</span>
          </button>
          <button
            type="button"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-3 rounded-lg",
              "text-xs font-medium",
              "bg-zinc-900 dark:bg-zinc-50",
              "text-zinc-50 dark:text-zinc-900",
              "hover:bg-zinc-800 dark:hover:bg-zinc-200",
              "shadow-sm hover:shadow",
              "transition-all duration-200"
            )}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Pay</span>
          </button>
          <button
            type="button"
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-3 rounded-lg",
              "text-xs font-medium",
              "bg-zinc-900 dark:bg-zinc-50",
              "text-zinc-50 dark:text-zinc-900",
              "hover:bg-zinc-800 dark:hover:bg-zinc-200",
              "shadow-sm hover:shadow",
              "transition-all duration-200"
            )}
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
