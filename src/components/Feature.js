import React, { useState, useEffect } from "react";
import axios from "axios";

import FeatureChair from "./FeatureChair";

const Feature = () => {
  const [featureProds, setFeatureProds] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        "https://ecommerce-sagartmg2.vercel.app/api/products/trending"
      );

      setFeatureProds((prevProd) => {
        return response.data.data;
      });
    };
    fetchApi();
  }, []);
  return (
    <div className="container mt-12">
      <h1 className="text-center font-bold text-3xl capitalize">
        Featured Products
      </h1>

      <div className="grid grid-cols-1 gap-7 mt-12 md:grid-cols-4 sm:grid-cols-2 ">
        {featureProds.map((product) => {
          return <FeatureChair key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Feature;
