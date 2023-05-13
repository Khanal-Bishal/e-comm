import React from "react";
import Image from "next/image";
import Chair from "@/assets/chair.png";
import Icons from "@/components/Icons";

const FeatureChair = ({ product }) => {
  const { name, price, count } = product;
  return (
    <div className="border hover:border-[#2F1AC4] transition-all duration-300  bg-[#F6F7FB] group">
      <div className="flex justify-end relative">
        <Icons className=" items-center cursor-pointer absolute top-1 left-5 flex gap-2"></Icons>
        <Image
          src={Chair}
          alt="ima"
          className=" bg-[#F6F7FB]  w-full aspect-square  object-cover"
        ></Image>
      </div>
      <div className="flex flex-col items-center bg-white gap-3 group-hover:bg-[#2F1AC4] group-hover:text-zinc-100 transition-all duration-200 p-5 ">
        <p className="text-secondary font-bold text-[1.1rem] tracking-wide group-hover:text-zinc-100">
          {name}
        </p>
        <p className="font-bold">Code {count} </p>
        <p className="font-bold">${price}</p>
      </div>
    </div>
  );
};

export default FeatureChair;
