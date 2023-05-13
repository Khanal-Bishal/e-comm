import React, { useState, useEffect } from "react";
import axios from "axios";

import LatestChair from "./LatestChair";

const Latest = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://ecommerce-sagartmg2.vercel.app/api/products?"
      );
      setProducts((prevProd) => response.data.data[0].data);
    };
    fetch();
  }, []);
  return (
    <div className="mt-32 container">
      <p className="font-bold text-3xl text-header text-center">
        Latest Product
      </p>
      {products?.length === 0 && (
        <p className="font-bold text-4xl uppercase mt-36 text-center ">
          LOADING ...
        </p>
      )}
      <div className="grid grid-cols-1 mt-2   md:grid-cols-3 gap-3 ">
        {products.map((product) => {
          return <LatestChair product={product} />;
        })}
      </div>
    </div>
  );
};

export default Latest;
