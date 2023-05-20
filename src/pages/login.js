import React, { useState } from "react";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { setReduxUser } from "@/store/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => {});

  const [email, setEmail] = useState("b@b.com");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [singleError, setSingleError] = useState({});
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    let validation = true;

    const temp = {};

    if (!email) {
      temp.email = "required*";
      validation = false;
    }

    if (!password) {
      temp.password = "required*";
      validation = false;
    }

    setSingleError(temp);

    if (validation) {
      console.log("api called");
      setIsSubmit(true);
      axios
        .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          // localStorage.setItem("access_token", res.data.access_token);
          setIsSubmit(false);
          dispatch(setReduxUser(res.data.user));
          router.push("/");
        })
        .catch((err) => {
          setIsSubmit(false);
          setError(err.response?.data.msg);
        });
    }
  };

  return (
    <>
      <Header />

      <form className="container mt-10" onSubmit={handleSubmit}>
        {error && (
          <small className="bg-red-100  m-7 mb-6 container block p-3 uppercase font-mono tracking-wide border rounded-md">
            {error}
          </small>
        )}
        <div className="mb-6">
          <label htmlfor="email" className="form-label ">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="name@flowbite.com"
            onChange={(event) => {
              setEmail(event.target.value);
              setSingleError({ ...singleError, email: "" });
              setError("");
              //   if (event.target.value) {
              //     setError({ ...error, email: "" });
              //   }
            }}
          />
          {singleError.email && (
            <small className="text-red-400">{singleError.email}</small>
          )}
        </div>

        <div className="mb-6">
          <label htmlfor="password" className="form-label">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border  text-black text-sm rounded-lg   block w-full p-2.5  dark:placeholder-gray-400  dark:focus:border-blue-500"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
              setSingleError({ ...singleError, password: "" });
              setError("");
              //   if (event.target.value) {
              //     setError({ ...error, password: "" });
              //   }
            }}
          />
          {singleError.password && (
            <small className="text-red-400">{singleError.password}</small>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmit}
          className="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none disabled:bg-gray-400 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
        <small className="my-4 mx-1 block text-[10px]">
          Not a user?
          <Link href="/signup" className="text-secondary mx-1">
            Sign up
          </Link>
        </small>
      </form>
    </>
  );
};

export default Login;
