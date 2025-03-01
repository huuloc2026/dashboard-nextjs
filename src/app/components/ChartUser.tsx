"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartDataUser = [
  { month: "January", seller: 1860, client: 800 },
  { month: "February", seller: 2100, client: 950 },
  { month: "March", seller: 1950, client: 1100 },
  { month: "April", seller: 2300, client: 1250 },
  { month: "May", seller: 2000, client: 1000 },
  { month: "June", seller: 2200, client: 1150 },
  { month: "July", seller: 1700, client: 900 },
  { month: "August", seller: 2400, client: 1300 },
  { month: "September", seller: 2150, client: 1050 },
  { month: "October", seller: 2250, client: 1200 },
  { month: "November", seller: 1900, client: 950 },
  { month: "December", seller: 2500, client: 1350 },
];
const chartConfig = {
  seller: {
    label: "seller",
    color: "hsl(var(--chart-1))",
  },
  client: {
    label: "client",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartUser() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartDataUser}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="seller"
              type="monotone"
              stroke="var(--color-seller)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="client"
              type="monotone"
              stroke="var(--color-client)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
