import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HistoryUVData } from "@/lib/constants";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const HistoryUVCard = () => {
  const allCities = Object.keys(HistoryUVData);
  const months = HistoryUVData[allCities[0]].map((item) => item.month);

  const transformedData = months.map((month) => {
    // Create a new object with the month
    const newObj: { month: string; [key: string]: number | string } = {
      month: month,
    };
    allCities.forEach((city) => {
      const cityData = HistoryUVData[city].find((item) => item.month === month);
      if (cityData) {
        newObj[city] = Math.round(cityData.uv_index * 10) / 10;
      }
    });
    return newObj;
  });

  // Map cities to their respective states for the chart config

 const chartConfig = {
   Adelaide: {
     label: "Adelaide (South Australia)",
     color: "hsl(260, 90%, 60%)",
   },
   Alice_Springs: {
     label: "Alice Springs (Northern Territory)",
     color: "hsl(0, 90%, 60%)",
   },
   Brisbane: {
     label: "Brisbane (Queensland)",
     color: "hsl(145, 90%, 45%)",
   },
   Canberra: {
     label: "Canberra (Australian Capital Territory)",
     color: "hsl(280, 90%, 60%)",
   },
   Darwin: {
     label: "Darwin (Northern Territory)",
     color: "hsl(30, 90%, 60%)",
   },
   Emerald: {
     label: "Emerald (Queensland)",
     color: "hsl(180, 90%, 50%)",
   },
   Gold_Coast: {
     label: "Gold Coast (Queensland)",
     color: "hsl(340, 90%, 60%)",
   },
   Kingston: {
     label: "Kingston (Tasmania)",
     color: "hsl(120, 90%, 75%)",
   },
   Melbourne: {
     label: "Melbourne (Victoria)",
     color: "hsl(300, 90%, 70%)",
   },
   Newcastle: {
     label: "Newcastle (New South Wales)",
     color: "hsl(50, 90%, 60%)",
   },
   Perth: {
     label: "Perth (Western Australia)",
     color: "hsl(240, 90%, 60%)",
   },
   Sydney: {
     label: "Sydney (New South Wales)",
     color: "hsl(15, 90%, 60%)",
   },
   Townsville: {
     label: "Townsville (Queensland)",
     color: "hsl(160, 90%, 45%)",
   },
 } satisfies ChartConfig;

 // Updated displayCities array with all cities
 const displayCities = [
   "Adelaide",
   "Alice_Springs",
   "Brisbane",
   "Canberra",
   "Darwin",
   "Emerald",
   "Gold_Coast",
   "Kingston",
   "Melbourne",
   "Newcastle",
   "Perth",
   "Sydney",
   "Townsville",
 ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>UV Index Historical Data</CardTitle>
        <CardDescription>
          The Average UV Index for the past 12 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={transformedData}
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
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {displayCities.map((city) => (
              <Area
                key={city}
                dataKey={city}
                type="natural"
                fill={`var(--color-${city})`}
                fillOpacity={0.4}
                stroke={`var(--color-${city})`}
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-4 text-sm p-4">
          <div className="grid gap-4">
            <div className="flex flex-col gap-3 font-medium leading-relaxed">
              <p>
                UV index of over 3 means that sunscreen is not optional, but
                necessary. The above chart shows that the UV index averages over
                3 for majority of the months in all the states of Australia.
                This means that, if sunscreen isn’t applied in regular
                intervals, it can lead to long term skin problems, or maybe even
                cancer.
              </p>
            </div>
            <div className="flex items-center gap-2 leading-relaxed mt-2 text-muted-foreground">
              Average UV Index by Month Over the Last Five Years in Each City
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HistoryUVCard;
