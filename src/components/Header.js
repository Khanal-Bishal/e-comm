import React from "react";
import Link from "next/link";

import {
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router";
import { useRouter } from "next/router";
// import products from "@/pages/Products";

const Header = () => {
  // const navigate = useNavigate();
  const router = useRouter();
  const searchHandler = (event) => {
    event.preventDefault();
    router.push(`/products?search_term=${event.target.searchInput.value}`);
  };

  return (
    <header>
      <nav className=" bg-primary w-full m-0 p-0 text-zinc-200 ">
        <div className="container flex justify-between py-3">
          <ul className="my-1 md:flex gap-6">
            <li className="flex gap-2 items-center">
              <AiOutlineMail className="inline" />
              <a href="mailto: abc@example.com">hechatoncheires434@gmail.com</a>
            </li>

            <li className="flex gap-2 items-center">
              <BsFillTelephoneFill className="inline" />
              <a href="tel+9841945056">984023443545</a>
            </li>
          </ul>
          <ul className=" md:flex">
            <li className="p-2 items-center">
              <Link href="/login" className="p-1">
                Login
              </Link>
              <BsPerson className="inline" />
            </li>
            <li className="p-2">
              <Link href="/wishlist">
                <span className="p-1">Wishlist</span>
                <AiOutlineHeart className="inline" />
              </Link>
            </li>
            <li className="p-2 ">
              <Link href="/cart">
                <AiOutlineShoppingCart className="inline " />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="container md:flex mt-5 justify-between ">
        <div className=" flex justify-between md:gap-24  ">
          <h2 className="uppercase font-semibold text-4xl text-header">
            Hetko
          </h2>
          <ul className=" font-semibold md:flex gap-3 items-center grow flex justify-center">
            <li>
              <Link href="/" className="text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-secondary">
                Product
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-secondary">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <form
            className="flex items-center grow  mt-5"
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
