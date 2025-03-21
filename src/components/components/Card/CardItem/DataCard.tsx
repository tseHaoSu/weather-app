import CardContainer from "../Container/CardContainer";
import CancerCaseCard from "./CancerCaseCard";
import ForecastCard from "./ForecastCard";
import TempForecastCard from "./TempForecastCard";

const DataCard = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 p-4 w-full">
      {/* Location and risk cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <CardContainer className="p-0 col-span-3">
          <ForecastCard />
        </CardContainer>
        <CardContainer className="p-0 col-span-3">
          <TempForecastCard />
        </CardContainer>
        <CardContainer className="p-0 col-span-3">
          <CancerCaseCard />
        </CardContainer>
      </div>
      {/* Forecast and map */}
      {/* <div className="h-[calc(100vh-320px)] min-h-[400px]">
          <CardContainer>
            <ForecastCard />
          </CardContainer>
        </div> */}
    </div>
  );
};

export default DataCard;
