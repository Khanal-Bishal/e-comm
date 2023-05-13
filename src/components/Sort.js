import React from "react";
import { useRouter } from "next/router";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

const Sort = () => {
  const router = useRouter();
  const perPageHandler = (event) => {
    event.preventDefault();
    console.log(router.asPath);

    if (router.asPath.includes("?") && !router.asPath.includes("per_page")) {
      router.push(`${router.asPath}&per_page=${event.target.value}`);
    } else if (
      router.asPath.includes("?") &&
      router.asPath.includes("per_page")
    ) {
      const slice = router.asPath.split("&");

      const sliced = slice.filter((slice) => {
        return !slice.includes("per_page");
      });
      // console.log(sliced);
      let slicedUrl = sliced[0];
      console.log(slicedUrl);
      sliced.forEach((slice, index) => {
        if (index === 0) {
        } else {
          slicedUrl += `&${slice}`;
        }
      });
      console.log(slicedUrl);
      // console.log(slice[0]);
      // const slicedUrl = slice[0];
      router.push(`${slicedUrl}&per_page=${event.target.value}`);
    } else {
      router.push(`/products?per_page=${event.target.value}`);
    }
  };
  return (
    <div className="container mt-16 flex flex-col justify-between gap-4  text-header md:flex-row md:mt-32">
      <div>
        <div className="text-xl font-bold ">
          <em>Ecommerce Acceories & Fashion item</em>
        </div>
        <div className="font-extralight text-xs">About 50 results!</div>
      </div>

      <div className="flex gap-3 justify-between items-center">
        <div>
          Per Page:
          <form className="inline ml-2 border">
            <select name="perpage" onChange={perPageHandler}>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </form>
        </div>
        <div>
          Sort By:
          <form className="inline ml-2 border">
            <select name="sort">
              <option value="priceasc">Price asc</option>
              <option value="pricedesc">Price desc</option>
              <option value="nameasc">Name asc</option>
              <option value="namedesc">Name desc</option>
            </select>
          </form>
        </div>
        <div className="ml-2">
          View
          <BsFillGridFill className="inline ml-2" />
          <AiOutlineBars className="inline ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Sort;
