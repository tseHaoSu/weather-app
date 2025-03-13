import useInputQueryStore from "@/store/store";

const SunScreenCalculation = () => {
  const skinType = useInputQueryStore((state) => state.inputQuery.skinType);

  // Return just the recommended sunscreen amount string based on skin type
  const getSunscreenAmount = () => {
    switch (skinType) {
      case "normal":
        return "2-3 ml";
      case "dry":
        return "3-4 ml";
      case "oily":
        return "2-3 ml";
      case "combination":
        return "2.5-3.5 ml";
      case "sensitive":
        return "2-3 ml";
      default:
        return "2-3 ml";
    }
  };

  return getSunscreenAmount();
};

export default SunScreenCalculation;
