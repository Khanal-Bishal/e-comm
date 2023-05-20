import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";

const icons = ({ className }) => {
  return (
    <div className={className}>
      <AiOutlineShoppingCart className=" hover:border hover:rounded-full hover:bg-[#E0D3F5]  hidden group-hover:inline transition-all" />
      <AiOutlineHeart className="hidden hover:border hover:rounded-full hover:bg-[#E0D3F5]  group-hover:inline transition-all" />
    </div>
  );
};

export default icons;
