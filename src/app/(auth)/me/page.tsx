import Card09 from "@/app/components/card-09";
import { ChartArea } from "@/app/components/chart-area";

import Marquee from "@/app/components/Marquee";

export default function MePage() {
  return (
    <>
      {" "}
      <div className="flex min-h-svh items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          <ChartArea />
        </div>
      </div>
      <h1>Me Page</h1>;
    </>
  );
}
