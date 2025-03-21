import ForecastCard from "../components/Card/CardItem/ForecastCard";
import LocationCard from "../components/Card/CardItem/LocationCard";
import RiskCard from "../components/Card/CardItem/RiskCard";
import CardContainer from "../components/Card/Container/CardContainer";

const DashboardPage = () => {
  return (
    <div className="p-4 w-full">
      <h1 className="text-5xl mb-4 font-bold">Dashboard</h1>
      <div className="flex flex-col gap-4 mt-7">
        {/* Location and risk cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <CardContainer>
            <LocationCard />
          </CardContainer>
          <CardContainer className="overflow-hidden p-0 col-span-2">
            <RiskCard />
          </CardContainer>
          <CardContainer className="p-0 col-span-3">
            <ForecastCard />
          </CardContainer>
        </div>
        {/* Forecast and map */}
        {/* <div className="h-[calc(100vh-320px)] min-h-[400px]">
          <CardContainer>
            <ForecastCard />
          </CardContainer>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardPage;
