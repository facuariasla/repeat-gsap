import React from "react";

const CoverTitle = () => {
  return (
    <div className="flex flex-col gap-8 px-4 pt-64 pb-36">
      <div className="flex flex-col gap-4 md:gap-0">
        <div>
          <h2 className="text-5xl sm:text-8xl leading-none font-normal ">
            THE EASIEST WAY
          </h2>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="hidden lg:flex mb-2 px-6 py-3 flex justify-center items-center self-end bg-cred border border-black ">
            <p className="text-4xl font-bold">↓</p>
          </div>
          <h2 className=" bordertitle text-5xl sm:text-8xl leading-none font-normal leading-none">
            FOR CUSTOMERS
          </h2>
        </div>
        <div className="flex flex-col  lg:flex-row  items-center gap-2">
          <h2 className="text-5xl sm:text-8xl leading-none font-normal self-start">
            TO BUY AGAIN
          </h2>
          {/* <button className="mybtn w-48 h-16 bg-cyellow self-start lg:self-end mb-2 ">
            GET STARTED
          </button> */}
          <div className="flex flex-row items-center justify-center gap-2 px-6 py-3 border border-black bg-cyellow font-semibold self-start lg:self-end mb-2 cursor-pointer">
            <p className="text-3xl pb-1">→</p>
            <p>GET STARTED</p>
          </div>
        </div>
      </div>

      <div className="w-60 font-medium md:ml-40">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui,
          nulla unde illo rem ipsa sequi alias voluptas atque.
        </p>
      </div>
    </div>
  );
};

export default CoverTitle;
