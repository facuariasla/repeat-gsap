import React from "react";
import { FaOpencart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center p-6">
      <nav className="flex flex-row items-center gap-2 cursor-pointer">
        <FaOpencart className="font-bold text-3xl lg:text-xl"/>
        <p className="font-bold text-3xl lg:text-lg">REPEAT</p>
      </nav>
      <nav className="hidden lg:flex gap-6 border border-black py-3 px-4 font-semibold">
        <button>COMPANY</button>
        <button>CONTENT</button>
        <button>CPG HOUSE</button>
        <button>PRICING</button>

      </nav>
      {/* DESK */}
      <nav className="hidden lg:flex flex flex-row gap-2">
        <button className="mybtn">LOGIN</button>
        <div className="flex flex-row items-center justify-center px-2 py-1 border border-black bg-cyellow font-semibold cursor-pointer">
          <p className="text-3xl pb-1">→</p>
          <p>BOOK A DEMO</p>
        </div>
      </nav>
      {/* MOBILE */}
      <nav className="lg:hidden border border-black px-8 py-4 font-semibold text-2xl cursor-pointer">
        <p>MENU</p>
      </nav>
    </header>
  );
};

export default Header;
