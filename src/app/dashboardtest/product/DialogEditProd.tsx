import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
export function DialogEditProd({ product }: any) {
  console.log(product);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [status, setStatus] = useState(product.status);
  const [createAt, setCreateAt] = useState(product.createdAt);
  const [updatedAt, setUpdatedAt] = useState(product.updatedAt);

  //   const [name, setName] = useState(user.name);
  //   const [email, setEmail] = useState(user.email);
  //   const [status, setStatus] = useState(user.status);
  //   const [role, setRole] = useState(user.role); // Giả sử role mặc định là "User"

  //   const isAdmin = role === "Admin"; // Kiểm tra xem có phải admin không
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn reload trang

    // Kiểm tra dữ liệu hợp lệ (nếu cần)

    try {
      // Gửi dữ liệu lên server (giả sử có API update profile)
      console.log("Submitting data:");
      toast("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      toast("Failed to update profile.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="focus:outline-none">
        <Button size="sm" variant="ghost">
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Update your personal information and settings.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Product Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Price
          </Label>
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stock
          </Label>
          <Input
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="createAt" className="text-right">
            Stock
          </Label>
          <Input
            disabled
            id="createAt"
            value={createAt}
            onChange={(e) => setCreateAt(e.target.value)}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="updatedAt" className="text-right">
            Stock
          </Label>
          <Input
            disabled
            id="updatedAt"
            value={updatedAt}
            onChange={(e) => setUpdatedAt(e.target.value)}
            className="col-span-3"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
