import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-white fixed inset-x-0 top-0 z-50 hidden bg-zinc-950/80 backdrop-blur transition will-change-auto md:block">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="flex items-center border-b border-b-white/5 py-5">
          <div className="flex-1 flex items-center gap-3">
            <Image src={"leetcode.svg"} width={30} height={30} alt="logo" />
            <p className="text-white">AlgoHub</p>
          </div>
          <div className="flex-1">
            <div className="flex gap-10 justify-center">
              <div className="rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100">
                <Link href={"/"}>Explore</Link>
              </div>
              <div className="rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100">
                <Link href={"/"}>Problems</Link>
              </div>
              <div className="rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100">
                <Link href={"/"}>Disscussion</Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-end">
              <div className="bg-[#423726] cursor-pointer transition rounded-full px-4 py-2">
                <p className="text-[#FFA116]">Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
