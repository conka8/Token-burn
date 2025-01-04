"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="flex h-20 border-b items-center md:justify-start justify-between fixed left-0 top-0 w-full bg-gray-200 shadow">
      <div className="flex items-center justify-center h-full ml-[20px]">
        <Link href={"/"}>
          <img src="/img/logo.png" alt="logo.png" className="w-[90px]" />
        </Link>
      </div>
      <div className="gap-4 justify-start w-[300px] text-[21px] ml-[20px] md:flex hidden">
        <Link
          href={"/"}
          className={`${pathname === "/" ? "font-semibold" : ""}`}
        >
          Burn
        </Link>
        <Link
          href={"/leaderboard"}
          className={`${pathname === "/leaderboard" ? "font-semibold" : ""}`}
        >
          Leaderboard
        </Link>
        <Link
          href={"/claim"}
          className={`${pathname === "/claim" ? "font-semibold" : ""}`}
        >
          Claim
        </Link>
      </div>
      <div className="flex-row-reverse w-full pr-9 md:flex hidden">
        <button
          className="bg-black1 text-white rounded-lg px-5 py-2"
          type="button"
        >
          Connect wallet
        </button>
      </div>

      {/* Hamburger Menu */}
      <div
        aria-label="hamburger-menu"
        className={openMenu ? "openMenu mr-[15px]" : "mr-[15px]"}
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* mobile */}
      {openMenu && (
        <div className="fixed left-[50%] -translate-x-1/2 top-[100px] w-[90vw] h-[85vh] md:hidden flex flex-col justify-start bg-gray-200 items-center pt-[20px]">
          <Link
            href={"/"}
            onClick={() => {
              setOpenMenu(false);
            }}
            className={`border border-black1 text-center rounded-md w-4/6 px-2 py-1 `}
          >
            Burn
          </Link>
          <Link
            onClick={() => {
              setOpenMenu(false);
            }}
            href={"/leaderboard"}
            className={`border border-black1 text-center rounded-md w-4/6 px-2 py-1 mt-[15px]`}
          >
            Leaderboard
          </Link>
          <Link
            href={"/claim"}
            onClick={() => {
              setOpenMenu(false);
            }}
            className={`border border-black1 text-center rounded-md w-4/6 px-2 py-1 mt-[15px]`}
          >
            Claim
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
