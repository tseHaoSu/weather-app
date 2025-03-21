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
    Perth: {
      label: "Perth (Western Australia)",
      color: "hsl(280, 90%, 60%)",
    },
    Melbourne: {
      label: "Melbourne (Victoria)",
      color: "hsl(200, 90%, 50%)",
    },
    Hobart: {
      label: "Hobart (Tasmania)",
      color: "hsl(160, 90%, 45%)",
    },
    Adelaide: {
      label: "Adelaide (South Australia)",
      color: "hsl(120, 90%, 40%)",
    },
    Brisbane: {
      label: "Brisbane (Queensland)",
      color: "hsl(40, 90%, 55%)",
    },
    Sydney: {
      label: "Sydney (New South Wales)",
      color: "hsl(0, 90%, 60%)",
    },
  } satisfies ChartConfig;

  // Select key cities to display from your data
  const displayCities = [
    "Perth",
    "Melbourne",
    "Adelaide",
    "Brisbane",
    "Sydney",
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
              Monthly Average UV Index
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default HistoryUVCard;
