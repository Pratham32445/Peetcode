import Image from "next/image";
import Link from "next/link";
import React from "react";

const navbarItems = [
  { name: "Problems", href: "/problems" },
  { name: "Explore", href: "/explore" },
  { name: "Contest", href: "/contest" },
  { name: "Discuss", href: "/discuss" },
  { name: "Interview", href: "/interview" },
];

const Frontnavbar = () => {
  return (
    <div className="p-5 bg-[#282828]">
      <div className="flex items-center">
        <div>
          <Image src={"leetcode.svg"} width={30} height={30} alt="logo" />
        </div>
        <div className="flex mx-10 gap-10">
          {navbarItems.map(({ name, href }, idx) => (
            <div key={idx}>
              <Link href={href}>
                <p>{name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontnavbar;
