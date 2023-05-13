import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaSearchPlus } from "react-icons/fa";

const IconVisible = ({ className }) => {
  return (
    <div className={className}>
      <AiOutlineShoppingCart className=" hover:border hover:rounded-full hover:bg-[#E0D3F5]   group-hover:inline transition-all" />
      <AiOutlineHeart className=" hover:border hover:rounded-full hover:bg-[#E0D3F5]  group-hover:inline transition-all" />
      <FaSearchPlus className="hover:border hover:rounded-full hover:bg-[#E0D3F5] group-hover:inline transition-all" />
    </div>
  );
};

export default IconVisible;
