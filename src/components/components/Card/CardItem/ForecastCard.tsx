import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useWeatherData } from "@/hooks/useUV";
import { DEFAULT_COORDINATES, locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, XAxis, Area, AreaChart} from "recharts";

const ForecastCard = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const currentDate = new Date();
  const coordinates =
    location && locationCoordinates[location]
      ? locationCoordinates[location]
      : DEFAULT_COORDINATES;

      

  const { data: weatherData } = useWeatherData({
    lat: coordinates.lat,
    lon: coordinates.lng,
  });

  const chartData = weatherData?.hourly.slice(0,24).map((hourData, index) => {
    return {
      hour: index,
      uvi: hourData.uvi,
    };
  });

  console.log(chartData);

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>UV Index Forecast for {location}</CardTitle>
        <CardDescription>
          Showing the UVI forecast for the next 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={5}
              tickFormatter={(value) => {
                const hour = value % 12 === 0 ? 12 : value % 12;
                const ampm = value < 12 ? "AM" : "PM";
                return `${hour} ${ampm}`;
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="uvi"
              type="natural"
              fill="hsl(40, 100%, 50%)"
              fillOpacity={0.4}
              stroke="hsl(25, 100%, 50%)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              UV Index tend peak at 7am to 5pm <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {currentDate.toDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ForecastCard;
