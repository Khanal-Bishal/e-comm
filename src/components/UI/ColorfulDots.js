import React from "react";

const ColorfulDots = ({ className }) => {
  return (
    <div className={className}>
      <div className="h-3 w-3 m-1 bg-yellow-300 rounded-full "></div>
      <div className="h-3 w-3 m-1 bg-red-300 rounded-full "></div>
      <div className="h-3 w-3 m-1 bg-blue-300 rounded-full "></div>
    </div>
  );
};

export default ColorfulDots;
