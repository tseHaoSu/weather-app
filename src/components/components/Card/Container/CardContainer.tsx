import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CardContainer = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`rounded-lg shadow-lg text-white  h-full w-full overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default CardContainer;
