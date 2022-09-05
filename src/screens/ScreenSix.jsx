import React from "react";
import ScreenSeven from "./ScreenSeven";

const ScreenSix = () => {
  return (
    <section className="min-h-screen w-full text-white bg-black flex flex-col items-center justify-center gap-8 rounded-t-3xl border-t border-black p-8">
      <div className="flex flex-col justify-between gap-10 h-full pt-20">
        {/* TOP */}
        <div className="flex flex-col gap-4 self-start md:self-end">
          <h3 className="text-5xl md:text-6xl md:text-right lg:pl-48 self-start md:self-end">
            LET’S MAKE IT EASIER FOR YOUR CUSTOMERS TO BUY AGAIN
          </h3>
          <button className="mybtn w-80 self-start md:self-end bg-cyellow text-black h-16">
            GET STARTED
          </button>
        </div>
        {/* BOTTOM -> movement boxes */}
        <div className="flex flex-row flex-wrap gap-4 bg-black h96- w-full">
          <div className="w-52 h-28 border border-white"></div>
          <div className="w-52 h-28 border border-white"></div>
          <div className="w-52 h-28 border border-white"></div>
          <div className="w-52 h-28 border border-white"></div>
        </div>
      </div>
      <ScreenSeven />
    </section>
  );
};

export default ScreenSix;
