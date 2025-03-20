import check from "@/assets/check.jpg";
import sunImage from "@/assets/sun.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  return (
    <div className="mx-auto max-w-[1400px] min-h-screen bg-[#FFFBD2] overflow-hidden">
      <div className="relative w-full h-[50vh]">
        <img
          src={sunImage}
          alt="Sun Protection"
          className="w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => setShowSecondText(true)}
          className="absolute bottom-5 left-5"
        >
          <h1 className="text-7xl font-bold text-[#F9B52C]">
            Solar Protection
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSecondText ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="w-full mt-4 pr-5 flex justify-end min-h-[80px]"
      >
        <p className="text-5xl text-[#2B69C4] font-semibold">
          Essential for healthy skin
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-[#F9B52C] text-3xl font-semibold mb-4">
          Would you like to know your current UV exposure risk?
        </p>
        <Link to="/main">
          <button className="bg-[#F9B52C] hover:bg-orange-500 text-white font-bold py-6 px-10 rounded-lg text-2xl shadow-lg transition transform hover:scale-105">
            Check UV Index
          </button>
        </Link>

        <div className="relative mt-6 flex items-center justify-center w-full h-[300px] overflow-hidden">
          <div className="absolute w-[200%] h-[1000px] bg-[#2B69C4] rounded-t-full top-[50px] z-10 shadow-lg">
            <img
              src={check}
              alt="Overlay"
              className="w-full h-full object-cover absolute top-[-250px] left-0 mix-blend-overlay opacity-80"
            />
          </div>
          <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl">
            <p className="text-white text-2xl font-semibold">
              Understand UV radiation and its impact on skin health
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
