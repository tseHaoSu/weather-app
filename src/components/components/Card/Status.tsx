import React from "react";

interface StatusProps {
  item?: string;
}

const Status = ({ item }: StatusProps) => {
  return <div className="aspect-video rounded-xl bg-muted/50">{item}</div>;
};

export default Status;
