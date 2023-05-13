import React from "react";
import Image from "next/image";
import Icons from "@/components/Icons";
import NoImage from "@/assets/noImage.jpg";

const LatestChair = ({ product }) => {
  const { name, price, images } = product;
  return (
    <div className="border gap-2 hover:border-primary mt-10  group">
      <div className="flex justify-center relative bg-[#EEEFFB]  ">
        <Image
          src={images.length > 0 ? images[0] : NoImage}
          width="1550"
          height="1550"
          alt="img"
          className="w-full aspect-square object-cover "
        ></Image>
        <Icons className="absolute flex flex-col gap-3  top-[50%] left-3 "></Icons>
      </div>

      <div className="flex justify-between font-bold mt-3 p-2">
        <p className="text-header ">{name}</p>
        <p>
          <span>${price}</span>
          <span className="line-through m-3 font-light text-secondary">
            $20
          </span>
        </p>
      </div>
    </div>
  );
};

export default LatestChair;
