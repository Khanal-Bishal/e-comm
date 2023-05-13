import React from "react";
import Image from "next/image";

import Promotion from "../assets/promotion.png";
import Bulb from "../assets/bulb.png";
import Sofa from "../assets/sofa.png";

const Banner = () => {
  return (
    <div className="mt-9 w-full  bg-red-200 relative md:mt-14 ">
      <Image src={Promotion} alt="img" className="h-[227px] md:h-auto"></Image>
      <Image
        src={Bulb}
        alt="img"
        className="absolute top-0 w-[20%] left-[2%] "
      />
      <Image
        src={Sofa}
        className="absolute top-[5%]  right-[4%] w-[32%] hidden md:block"
      />

      <div className="absolute top-[2%] left-[23%] md:left-[18%] md:top-[27%] ">
        <p className="text-secondary">Best Furniture For Your Castle....</p>
        <p className="font-extrabold text-2xl">
          New Furniture Collection
          <br /> Trends in 2020
        </p>
        <p className="mt-3 font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, dolore.
        </p>

        <button className="bg-secondary w-40 mt-4 text-zinc-200 p-3 md:mt-7 hover:bg-[#cd2b5b] hover:text-zinc-300  transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
