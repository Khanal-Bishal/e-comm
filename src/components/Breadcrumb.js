import React from "react";
import Link from "next/link";

const Breadcrumb = (props) => {
  return (
    <div className="bg-[#F6F5FF] mt-6 ">
      <div className="container p-24 ">
        <p className="font-bold text-4xl capitalize">
          {props.title ? <span>{props.title}</span> : "Shop show bar"}
        </p>
        <div className="mt-3">
          <Link href="/">Home . </Link>
          <Link href="/pages">Pages . </Link>
          <Link href="#" className="text-secondary">
            {props.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
