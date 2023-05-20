import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        " https://ecommerce-sagartmg2.vercel.app/api/products/categories"
      );
      console.log(typeof response.data);
      setCategories(response.data);
    };
    fetchApi();
  }, []);

  const searchHandler = (event) => {
    event.preventDefault();
    router.push(`/products?search_term=${event.target.searchInput.value}`);
  };

  return (
    <div className="-mb-10">
      <div className="bg-[#EEEFFB] mt-20  ">
        <div className=" container flex gap-8  w-full p-10 ">
          <div className="mt-20  flex-1">
            <h1 className="text-4xl font-semibold">Hekto</h1>
            <form
              className="flex items-center grow  mt-5 "
              onSubmit={searchHandler}
            >
              <input
                type="text"
                id="searchInput"
                name="searchInput"
                className="border w-full m-0 p-2 outline-none focus:border-2 focus:border-primary"
              />
              <button className="bg-secondary p-[0.5px] m-0 text-zinc-200  ">
                <AiOutlineSearch className=" " size={40} />
              </button>
            </form>
            <p className="footer-list">Contact info</p>
            <p className="footer-list">17th road Baluwatar, Kathmandu, Nepal</p>
          </div>

          <div className="flex-1 mt-20">
            <span>Categories</span>
            {categories.map((category, index) => {
              if (index < 5) {
                return (
                  <p key={index} className="footer-list">
                    {category}
                  </p>
                );
              }
            })}
          </div>

          <div className="flex-1 mt-20">
            <span>Customer Care</span>
            <ul>
              <li className="footer-list">My account</li>
              <li className="footer-list">Discount</li>
              <li className="footer-list">Returns</li>
              <li className="footer-list">Orders</li>
            </ul>
          </div>

          <div className="flex-1 mt-20">
            <span>Pages</span>
            <ul>
              <li className="footer-list">Blog</li>
              <li className="footer-list">Category</li>
              <li className="footer-list">Pre-Built pages</li>
              <li className="footer-list">WooCommerce pages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E4F8]  ">
        <div className="container flex items-center justify-around">
          <span className="font-extralight text-[10px]">
            &#169;Webecy- All Rights Reserved
          </span>
          <div className="mt-3 flex gap-3 items-start p-2  ">
            <AiFillFacebook className="inline" />
            <AiFillInstagram className="inline" />
            <AiFillTwitterCircle className="inline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
