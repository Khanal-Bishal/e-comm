import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import SingleProd from "@/components/SingleProd";
import Footer from "@/components/Footer";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ecommerce-sagartmg2.vercel.app/api/products/${router.query.slug}`
        );
        if (router.isReady) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [router.query.slug]);

  return (
    <>
      <Header />
      <Breadcrumb title="Product details" name={product.name} />
      <SingleProd />
      <Footer />
    </>
  );
};

export default SingleProduct;
