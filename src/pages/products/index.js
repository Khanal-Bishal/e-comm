import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Sort from "@/components/Sort";
import IconVisible from "@/components/UI/IconVisible";
import ColorfulDots from "@/components/UI/ColorfulDots";
import Filter from "@/components/Filter";
import Icons from "@/components/UI/Icons";
import NoImage from "@/assets/noImage.jpg";
import Footer from "@/components/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("list");

  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      const params = Object.entries(router.query);

      let url = "https://ecommerce-sagartmg2.vercel.app/api/products?";

      params.forEach((parameter) => {
        url += `${parameter[0]}=${parameter[1]}&`;
      });
      if (router.isReady) {
        const response = await axios.get(url);
        setProducts((prevProd) => response.data.data[0].data);
      }
    };
    fetch();
  }, [router.query]);

  return (
    <>
      <Header />
      <Breadcrumb name="Products" />
      <Sort setView={setView} />

      <div className="container md:grid md:grid-cols-4 mt-24 ">
        <Filter className="" />
        {products.length > 0 ? (
          products.map((product) => {
            return view === "list" ? (
              <div className="flex flex-col gap-9 md:col-start-2 md:col-end-5 mt-4 border justify-start items-start md:flex-row">
                <Image
                  src={product.images.length > 0 ? product.images[0] : NoImage}
                  width={1000}
                  height={1000}
                  alt="img"
                  className=" h-full md:w-1/4 border aspect-square md:object-cover object-cover sm:1/4 "
                ></Image>
                <div className="w-3/4 mt-6 p-2 text-center md:text-left">
                  <Link href={`/products/${product._id}`}>
                    <p className="font-bold text-3xl uppercase">
                      {product.name}
                    </p>
                  </Link>
                  <ColorfulDots className=" hidden  md:flex md:justify-center md:items-center " />
                  <p className="font-bold mt-2">${product.price}</p>
                  <p className="font-light mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque magnam repellat at eius quisquam, voluptatem adipisci
                    iusto id vero neque in suscipit molestiae reprehenderit
                    voluptates ab fugiat doloribus quis inventore!
                  </p>
                  <IconVisible
                    className="flex mt-14 gap-5 p-2 text-center justify-center md:justify-start"
                    product={product}
                  />
                </div>
              </div>
            ) : (
              <div className="border gap-2  hover:border-primary mt-10 m-4 group">
                <div className="flex justify-center relative bg-[#EEEFFB]  ">
                  <Image
                    src={
                      product.images.length > 0 ? product.images[0] : NoImage
                    }
                    width="1550"
                    height="1550"
                    alt="img"
                    className="w-full aspect-square object-cover "
                  ></Image>
                  <Icons className="absolute flex flex-col gap-3  top-[50%] left-3 "></Icons>
                </div>

                <div className="flex justify-between font-bold mt-3 p-2">
                  <p className="text-header ">{product.name}</p>
                  <p>
                    <span>${product.price}</span>
                  </p>
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
      <Footer />
    </>
  );
};

export default Products;
