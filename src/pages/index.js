import React, { useEffect } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Latest from "@/components/Latest";
import Footer from "@/components/Footer";

const index = ({ user }) => {
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <Latest />
      <Footer />
    </>
  );
};

export default index;
