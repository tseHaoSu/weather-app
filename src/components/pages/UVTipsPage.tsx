import { UVPreventionTips } from "@/lib/constants";

// Assuming UVPreventionTips is imported or defined elsewhere
const UVTipsPage = () => {
  // Convert object to array of [key, value] pairs
  const tipsArray = Object.entries(UVPreventionTips);

  // Create rows with 2 items per row
  const rows = [];
  const itemsPerRow = 2;

  for (let i = 0; i < tipsArray.length; i += itemsPerRow) {
    rows.push(tipsArray.slice(i, i + itemsPerRow));
  }

  return (
    <>
      <h1 className="text-5xl mx-auto p-4 font-bold">UV Prevention Tips</h1>
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex flex-wrap mb-4">
          {row.map(([title, content], colIndex) => (
            <div key={`tip-${rowIndex}-${colIndex}`} className="w-1/2 p-2">
              <div className="bg-white rounded-lg shadow-md h-full overflow-hidden">
                <div className="bg-blue-600 text-white p-2 font-semibold text-center">
                  {title}
                </div>
                <div className="p-3 text-sm overflow-y-auto">
                  {content}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default UVTipsPage;
