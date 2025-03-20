import Map from "@/components/components/Map/Map";
import LocationCard from "../components/Card/CardItem/LocationCard";
import RiskCard from "../components/Card/CardItem/RiskCard";
import CardContainer from "../components/Card/Container/CardContainer";

const DashboardPage = () => {
  return (
    <>
      <h1 className="text-5xl mx-auto p-4">Dashboard</h1>
      <div className="flex flex-col gap-4 p-4 w-full">
        {/* Second row - map and form with matching height */}
        <div className="grid md:grid-cols-3 gap-4 h-64">
          <CardContainer>
            <LocationCard />
          </CardContainer>
          <CardContainer className="overflow-hidden p-0 col-span-2">
            <RiskCard />
          </CardContainer>
        </div>
        {/* Third row - map and form with matching height */}
        <div className="grid md:grid-cols-3 gap-4 h-[calc(100vh-320px)] min-h-[400px]">
          <CardContainer className="md:col-span-3">
            <Map />
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
