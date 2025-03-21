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
import { CasesData } from "@/lib/constants";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const CancerCaseCard = () => {
  const chartConfig = {
    NewSouthWales: {
      label: "New South Wales",
      color: "hsl(var(--chart-1))",
    },
    Queensland: {
      label: "Queensland",
      color: "hsl(var(--chart-2))",
    },
    SouthAustralia: {
      label: "South Australia",
      color: "hsl(var(--chart-3))",
    },
    Tasmania: {
      label: "Tasmania",
      color: "hsl(var(--chart-4))",
    },
    Victoria: {
      label: "Victoria",
      color: "hsl(var(--chart-5))",
    },
    WesternAustralia: {
      label: "Western Australia",
      color: "hsl(var(--chart-6))",
    },
  } satisfies ChartConfig;

  //add is trending up logic

  return (
    <Card>
      <CardHeader>
        <CardTitle>Australian Case Reports by State</CardTitle>
        <CardDescription>
          Showing total reported cases for each state over 6 years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={CasesData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="WesternAustralia"
              type="natural"
              fill="var(--color-WesternAustralia)"
              fillOpacity={0.4}
              stroke="var(--color-WesternAustralia)"
              stackId="a"
            />
            <Area
              dataKey="Victoria"
              type="natural"
              fill="var(--color-Victoria)"
              fillOpacity={0.4}
              stroke="var(--color-Victoria)"
              stackId="a"
            />
            <Area
              dataKey="Tasmania"
              type="natural"
              fill="var(--color-Tasmania)"
              fillOpacity={0.4}
              stroke="var(--color-Tasmania)"
              stackId="a"
            />
            <Area
              dataKey="SouthAustralia"
              type="natural"
              fill="var(--color-SouthAustralia)"
              fillOpacity={0.4}
              stroke="var(--color-SouthAustralia)"
              stackId="a"
            />
            <Area
              dataKey="Queensland"
              type="natural"
              fill="var(--color-Queensland)"
              fillOpacity={0.4}
              stroke="var(--color-Queensland)"
              stackId="a"
            />
            <Area
              dataKey="NewSouthWales"
              type="natural"
              fill="var(--color-NewSouthWales)"
              fillOpacity={0.4}
              stroke="var(--color-NewSouthWales)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-4 text-sm p-4">
          <div className="grid gap-4">
            <div className="flex flex-col gap-3 font-medium leading-relaxed">
              <p>
                The graph shows that there is a lot of cancer cases that happen
                in Australia and a significant amount of them is because of the
                sun, causing skin cancer.
              </p>
              <p>
                This also demonstrates that the states with high UV averages
                have more incidences of cancer than the states that don't. So
                applying sunscreen is essential for your well being.
              </p>
            </div>
            <div className="flex items-center gap-2 leading-relaxed mt-2 text-muted-foreground">
              2015 - 2020
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CancerCaseCard;
