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

export function DiaLogUser({ user }: any) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [status, setStatus] = useState(user.status);
  const [role, setRole] = useState(user.role); // Giả sử role mặc định là "User"

  const isAdmin = role === "Admin"; // Kiểm tra xem có phải admin không
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn reload trang

    // Kiểm tra dữ liệu hợp lệ (nếu cần)
    if (!email || !name || !role || !status) {
      toast("Please fill in all fields.");
      return;
    }

    // Tạo object chứa thông tin profile
    const updatedProfile = {
      email,
      name,
      role,
      status,
    };

    try {
      // Gửi dữ liệu lên server (giả sử có API update profile)
      console.log("Submitting data:", updatedProfile);
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
        <div className="grid gap-5 py-5">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <div className="col-span-3">
              <Input
                disabled={!isAdmin}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!isAdmin && (
                <p className="text-xs text-gray-500 mt-2">
                  * Only Admins can edit the email!
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Username
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <div className="col-span-3">
              <Input
                disabled={!isAdmin}
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              {!isAdmin && (
                <p className="text-xs text-gray-500 mt-2">
                  * Only Admins can edit the email!
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-5">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="INACTIVE">Inactive</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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
