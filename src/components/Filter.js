import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Filter = ({ className }) => {
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://ecommerce-sagartmg2.vercel.app/api/products/categories"
      );
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const categoryHandler = (event) => {
    if (event.target.checked) {
      router.push(`products?search_term=${event.target.name}`);
    }
  };
  return (
    <div className={className}>
      {categories.map((category, index) => {
        return (
          <div className="select-none">
            <input
              type="checkbox"
              id={`${category}+${index}`}
              name={category}
              onChange={categoryHandler}
              defaultChecked={false}
            />
            <label htmlFor={`${category}+${index}`}>{category}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
