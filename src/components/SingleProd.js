import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import {
  AiOutlineHeart,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import NoImage from "@/assets/noImage.jpg";

const SingleProd = () => {
  const [productInfo, setProductInfo] = useState("description");
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ecommerce-sagartmg2.vercel.app/api/products/${router.query.slug}`
        );
        if (router.isReady) {
          setProduct(response.data.data);
          setLoading((prev) => false);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [router.query.slug]);

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <div className="container  mt-16 border rounded-xl">
        <div className="p-5 flex">
          <div className="w-1/2 bg-slate-400 rounded-md ">
            <Image
              src={product.length > 0 ? product.images[0] : NoImage}
              width={1000}
              height={1000}
            ></Image>
          </div>
          <div className=" w-1/2 m-9">
            <p className="text-4xl font-bold capitalize">{product.name}</p>
            <p className="mt-3">${product.price}</p>
            <p className="line-clamp-3 font-light text-sm mt-4">
              {product.description}
            </p>
            <div className="flex justify-start items-center mt-7 gap-4">
              <span className="capitalize font-semibold ml-4">
                {" "}
                add to cart
              </span>
              <AiOutlineHeart className="inline" />
            </div>
            <div className="mt-7 font-bold">
              Categories:
              {product.categories.map((cate) => {
                return (
                  <>
                    <span className="font-semibold capitalize mx-2 text-secondary">
                      {cate}
                    </span>
                  </>
                );
              })}
            </div>
            <div className="mt-3 flex gap-3 items-center">
              <span className="font-bold">Share</span>
              <AiFillFacebook className="inline" />
              <AiFillInstagram className="inline" />
              <AiFillTwitterCircle className="inline" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10">
        <div className="flex gap-10 justify-start ml-4 cursor-pointer select-none">
          <span
            className={
              productInfo === "description" ? "text-secondary underline" : ""
            }
            onClick={(event) => {
              event.preventDefault();
              setProductInfo("description");
            }}
          >
            Description
          </span>
          <span
            className={
              productInfo === "additionalInfo" ? "text-secondary underline" : ""
            }
            onClick={(event) => {
              event.preventDefault();
              setProductInfo("additionalInfo");
            }}
          >
            Additional info
          </span>
          <span
            className={
              productInfo === "reviews" ? "text-secondary underline" : ""
            }
            onClick={() => {
              setProductInfo("reviews");
            }}
          >
            Reviews
          </span>
          <span
            className={productInfo === "more" ? "text-secondary underline" : ""}
            onClick={() => {
              setProductInfo("more");
            }}
          >
            More
          </span>
        </div>
        {productInfo === "description" && (
          <div className="mt-5">{product.description}</div>
        )}
        {productInfo === "additionalInfo" && (
          <div className="mt-5">Addtional info</div>
        )}
        {productInfo === "reviews" && <div className="mt-5">Reviews here</div>}
        {productInfo === "more" && <div className="mt-5">More here</div>}
      </div>
    </>
  );
};

export default SingleProd;
