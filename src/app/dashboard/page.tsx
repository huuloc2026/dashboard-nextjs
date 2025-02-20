import { ChartArea } from "@/app/components/chart-area";
import { ChartBar } from "@/app/components/chart-bar";
import List01 from "@/app/components/list-01";
import UserList from "@/app/components/list-user";
import { Calendar, CreditCard, Wallet } from "lucide-react";

const DashBoardPage = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2 ">
            <Wallet className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Accounts
          </h2>
          <div className="flex-1">
            <List01 className="h-full w-full" />
          </div>
        </div>
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <CreditCard className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Recent Transactions
          </h2>
          <div className="flex-1">
            <UserList className="h-full w-full" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0F0F12] rounded-xl p-6 flex flex-col items-start justify-start border border-gray-200 dark:border-[#1F1F23]">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-left flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-50" />
            Upcoming Events
          </h2>
          <List01 className="h-full w-full" />
        </div>
      </div>
    </div>
    // <div className="gap-4">
    //   <div className="grid grid-cols-8 grid-rows-5 gap-4 ">
    //     <div className="col-span-2 row-span-2 bg-purple-100 ">
    //       <ChartBar />
    //     </div>
    //     <div className="col-span-2 row-span-2 col-start-3 bg-blue-600">
    //       {" "}
    //       <ChartArea />
    //     </div>
    //     <div className="col-span-2 row-span-2 col-start-5 bg-red-400">
    //       {" "}
    //       <ChartArea />
    //     </div>
    //     <div className="col-span-2 row-span-2 col-start-7 bg-orange-400">
    //       {" "}
    //       <ChartArea />
    //     </div>
    //     <div className="col-span-5 row-span-3 row-start-3 bg-yellow-400">
    //       <ChartBar />
    //     </div>
    //     <div className="col-span-3 row-span-3 col-start-6 row-start-3 bg-red-400">
    //       <ChartBar />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashBoardPage;
