import useInputQueryStore from "@/store/store";
import { useEffect, useState } from "react";

const NameCard = () => {
  const name = useInputQueryStore((state) => state.inputQuery).userName;
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Get current hour
    const hour = new Date().getHours();

    // Set greeting based on time of day
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good night");
    }

    // Format time for display
    const timeString = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(timeString);

    // Update time every minute
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white mx-auto h-full w-full flex flex-col">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            {greeting}, {name || ""}!
          </h2>
        </div>
        <div className="text-right">
          <div className="text-xl font-mono">{currentTime}</div>
          <div className="text-xs text-blue-200">
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      <p className="text-blue-100 text-sm mt-auto">
        We hope you're having a wonderful day
      </p>
    </div>
  );
};

export default NameCard;
