import useInputQueryStore from "@/store/store";

const NameCard = () => {
  const location = useInputQueryStore((state) => state.inputQuery.location);
  const clothingIcon = "🥼";
  const fireIcon = "🔥";

  return (
    <div className="bg-gradient-to-r to-blue-500 from-purple-600 rounded-lg p-6 h-full w-full flex flex-col">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-3xl font-bold truncate">
            {fireIcon}High UV in {location}
          </h2>
        </div>

        <div className="flex items-end justify-between flex-grow">
          <div className="text-6xl">
            {clothingIcon}
            <span className="text-blue-100 text-sm">
              We recommend wearing longsleeves to protect your skin.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
