import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CardContainer = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`transform transition duration-350 hover:scale-102 rounded-lg shadow-lg text-white mx-auto h-full w-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
