import React, { useState } from "react";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    let validation = true;

    const temp = {};
    if (!name) {
      temp.name = "required";
      validation = false;
    }
    if (!email) {
      temp.email = "required*";
      validation = false;
    }

    if (!password) {
      temp.password = "required*";
      validation = false;
    }

    setError(temp);

    if (validation) {
      console.log("api called");
      axios
        .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {
          name: name,
          email: email,
          password: password,
          role: event.target.role.value,
        })
        .then((res) => router.push("/login"))
        .catch((err) => {
          // console.log(err.response.data.errors.length);
          const temp = {};

          if (err.response.data.errors && err.response.data.errors.length > 0) {
            err.response.data.errors?.forEach((indivisualError) => {
              console.log(indivisualError);
              temp[indivisualError.param] = indivisualError.msg;
            });
          }
          console.log(temp);
          setError(temp);
        });
    }
  };
  return (
    <>
      <Header />

      <form className="container mt-10" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlfor="name" className="form-label ">
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            placeholder="John Doe"
            onChange={(event) => {
              setName(event.target.value);
              if (event.target.value) {
                setError({ ...error, name: "" });
              }
            }}
          />
          {error.name && <small className="text-red-400"> required*</small>}
        </div>

        <div className="mb-6">
          <label htmlfor="email" className="form-label">
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
              if (event.target.value) {
                setError({ ...error, email: "" });
              }
            }}
          />
          {error.email && <small className="text-red-400">{error.email}</small>}
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
              if (event.target.value) {
                setError({ ...error, password: "" });
              }
            }}
          />
          {error.password && (
            <small className="text-red-400">{error.password}</small>
          )}
          {/* {!error.password && error.pwLength && (
            <small className="text-red-400">
              Password must be more than 8 character
            </small>
          )} */}
        </div>

        <div className="mb-6">
          <label htmlfor="role" className="form-label">
            Role
          </label>
          <select className="form-control" name="role">
            <option value="" className="hidden">
              Select
            </option>
            <option value="buyer" selected>
              Buyer
            </option>
            <option value="seller">Seller</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
        <small className="my-4 mx-1 block text-[10px]">
          Already a user?
          <Link href="/login" className="text-secondary m-1">
            Login
          </Link>
        </small>
      </form>
    </>
  );
};

export default signup;
