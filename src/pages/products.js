import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Sort from "@/components/Sort";
import IconVisible from "@/components/IconVisible";
import ColorfulDots from "@/components/UI/ColorfulDots";
import Filter from "@/components/Filter";

import axios from "axios";
import Image from "next/image";

const Products = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      console.log(router);
      const params = Object.entries(router.query);

      console.log(params);
      let url = "https://ecommerce-sagartmg2.vercel.app/api/products?";

      params.forEach((parameter) => {
        url += `${parameter[0]}=${parameter[1]}&`;
      });
      console.log(url);
      const response = await axios.get(url);

      setProducts((prevProd) => response.data.data[0].data);
    };
    fetch();
  }, [router.query, router.pathname]);

  return (
    <>
      <Header />
      <Breadcrumb />
      <Sort />

      <div className="container md:grid md:grid-cols-4 mt-24">
        <Filter className="" />
        {products.length > 0 ? (
          products.map((product) => {
            return (
              <div className="flex flex-col gap-9 md:col-start-2 md:col-end-5 mt-4 border justify-start items-start md:flex-row">
                <Image
                  src={product.images[0]}
                  width={1000}
                  height={1000}
                  alt="img"
                  className=" h-full md:w-1/4 border aspect-square md:object-cover object-cover sm:1/4 "
                ></Image>
                <div className="w-3/4 mt-6 p-2 text-center md:text-left">
                  <p className="font-bold text-3xl uppercase">{product.name}</p>
                  <ColorfulDots className=" hidden  md:flex md:justify-center md:items-center " />
                  <p className="font-bold mt-2">${product.price}</p>
                  <p className="font-light mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque magnam repellat at eius quisquam, voluptatem adipisci
                    iusto id vero neque in suscipit molestiae reprehenderit
                    voluptates ab fugiat doloribus quis inventore!
                  </p>
                  <IconVisible className="flex mt-14 gap-5 p-2 text-center justify-center md:justify-start" />
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-start-2 col-end-5">
            <iframe
              src="https://embed.lottiefiles.com/animation/61171"
              className="w-full h-56"
            ></iframe>
            <p className="font-extrabold text-5xl text-center ">
              Product not found
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
