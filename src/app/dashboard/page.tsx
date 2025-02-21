import { ChartArea } from "@/app/components/chart-area";
import { ChartBar } from "@/app/components/chart-bar";
import List01 from "@/app/components/list-01";
import UserList from "@/app/components/list-user";
import { Calendar } from "lucide-react";

const DashBoardPage = () => {
  return (
    <div className="grid grid-cols-8 grid-rows-5 gap-4 p-4">
      {/* Left Panel - List */}
      <div className="col-span-2 row-span-2 col-start-1 col-end-5  rounded-lg shadow-sm ">
        <List01 />
      </div>

      {/* User List */}
      <div className="col-span-2 row-span-2 col-start-5  col-end-10 rounded-lg shadow-sm ">
        <UserList />
      </div>

      {/* Chart Areas */}
      {/* {[5, 7].map((col) => (
        <div key={col} className={`col-span-2 row-span-2 col-start-${col}`}>
          <ChartArea />
        </div>
      ))} */}

      {/* Large Chart */}
      <div className="col-span-5 row-span-3 row-start-3">
        <ChartBar />
      </div>

      {/* Upcoming Events */}
      <div className="col-span-3 row-span-3 col-start-6 row-start-3 bg-white dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-neutral-700 shadow-md">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          Upcoming Events
        </h2>
        <List01 />
      </div>
    </div>
  );
};

export default DashBoardPage;
