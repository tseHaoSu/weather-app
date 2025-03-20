// Import the images directly
import ACT from "@/assets/data/ACT.webp";
import NSW from "@/assets/data/NSW.webp";
import QLD from "@/assets/data/QLD.webp";
import SA from "@/assets/data/SA.webp";
import TAS from "@/assets/data/TAS.webp";

const DataPage = () => {
  // Use the imported image variables
  const images = [ACT, NSW, QLD, SA, TAS];

  return (
    <>
      <h1 className="text-5xl mb-2 p-1 text-center">Data</h1>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          {images.map((src, index) => (
            <div key={index} className="shadow-lg rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={`State image ${index + 1}`}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DataPage;
