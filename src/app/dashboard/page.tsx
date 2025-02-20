import { ChartArea } from "@/app/components/chart-area";
import { ChartBar } from "@/app/components/chart-bar";

const DashBoardPage = () => {
  return (
    <div className="gap-4">
      <div className="grid grid-cols-8 grid-rows-5 gap-4 ">
        <div className="col-span-2 row-span-2 bg-purple-100 ">
          <ChartBar />
        </div>
        <div className="col-span-2 row-span-2 col-start-3 bg-blue-600">
          {" "}
          <ChartArea />
        </div>
        <div className="col-span-2 row-span-2 col-start-5 bg-red-400">
          {" "}
          <ChartArea />
        </div>
        <div className="col-span-2 row-span-2 col-start-7 bg-orange-400">
          {" "}
          <ChartArea />
        </div>
        <div className="col-span-5 row-span-3 row-start-3 bg-yellow-400">
          <ChartBar />
        </div>
        <div className="col-span-3 row-span-3 col-start-6 row-start-3 bg-red-400">
          <ChartBar />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
