import React from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Latest from "@/components/Latest";

const index = () => {
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <Latest />
    </>
  );
};

export default index;
