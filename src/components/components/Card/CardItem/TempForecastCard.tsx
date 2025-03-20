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
import { useWeatherData } from "@/hooks/useUV";
import { DEFAULT_COORDINATES, locationCoordinates } from "@/lib/constants";
import useInputQueryStore from "@/store/store";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const TempForecastCard = () => {
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

  const chartData = weatherData?.hourly.slice(0, 24).map((hourData, index) => {
    return {
      hour: index,
      uvi: hourData.humidity,
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
        <CardTitle>Humidity Forecast for {location}</CardTitle>
        <CardDescription>
          Showing the Humidity forecast for the next 24 hours
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
              fill="hsl(200, 100%, 50%)"
              fillOpacity={0.4}
              stroke="hsl(210, 100%, 40%)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {currentDate.toDateString()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TempForecastCard;
