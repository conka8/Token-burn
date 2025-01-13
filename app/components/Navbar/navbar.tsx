"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex h-20 border-b border-orange-500/20 items-center justify-between fixed left-0 top-0 w-full bg-black/90 backdrop-blur-sm shadow-lg z-50">
      <div className="flex items-center justify-center h-full ml-[20px]">
        <Link href={"/"}>
          <img src="/img/logo.png" alt="logo.png" className="w-[120px]" />
        </Link>
      </div>

      <div className="flex-row-reverse w-full pr-9 md:flex hidden">
        <button
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all text-white rounded-xl px-6 py-2.5"
          type="button"
        >
          Connect wallet
        </button>
      </div>

      {/* Hamburger Menu for mobile */}
      <div
        aria-label="hamburger-menu"
        className={`${openMenu ? "openMenu" : ""} mr-[15px] md:hidden`}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
      </div>

      {/* mobile menu */}
      {openMenu && (
        <div className="fixed left-[50%] -translate-x-1/2 top-[100px] w-[90vw] md:hidden flex flex-col justify-start bg-black/95 backdrop-blur-sm items-center pt-[20px] rounded-2xl border border-orange-500/20">
          <button
            onClick={() => setOpenMenu(false)}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all text-white rounded-xl px-6 py-2.5 mb-6"
            type="button"
          >
            Connect wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
