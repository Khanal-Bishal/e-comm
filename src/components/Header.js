import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

import { BsFillTelephoneFill, BsPerson } from "react-icons/bs";
import { setReduxUser } from "@/store/slice/userSlice";

const Header = () => {
  const router = useRouter();
  const user = useSelector((redux_store) => {
    return redux_store.user.value;
  });
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setSearchValue(router.query.search_term);
  }, [router]);

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
            {!user ? (
              <li className="p-2 items-center">
                <Link href="/login" className="p-1">
                  Login
                </Link>
                <BsPerson className="inline" />
              </li>
            ) : (
              <>
                <li className="p-2 items-center">{user?.name}</li>
                <li className="p-2 ">
                  <Link href="/cart">
                    <AiOutlineShoppingCart className="inline " />
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/wishlist">
                    <span className="p-1">Wishlist</span>
                    <AiOutlineHeart className="inline" />
                  </Link>
                </li>

                <li
                  className="p-2"
                  onClick={(e) => {
                    dispatch(setReduxUser(null));
                  }}
                >
                  <span className="p-1 cursor-pointer">Logout</span>
                </li>
              </>
            )}
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
              <Link
                href="/"
                className={`hover:text-secondary ${
                  router.route === "/" && "text-secondary"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`hover:text-secondary ${
                  router.route === "/products" && "text-secondary"
                }`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`hover:text-secondary ${
                  router.route === "/shop" && "text-secondary"
                }`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-secondary ${
                  router.route === "/contact" && "text-secondary"
                }`}
              >
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
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
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
