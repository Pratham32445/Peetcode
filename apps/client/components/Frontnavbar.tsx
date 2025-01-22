"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FlameKindling } from "lucide-react";

const navbarItems = [
  { name: "Problems", href: "/problems" },
  { name: "Explore", href: "/explore" },
  { name: "Contest", href: "/contest" },
  { name: "Discuss", href: "/discuss" },
  { name: "Interview", href: "/interview" },
];

const Frontnavbar = () => {
  const [selectedState, setSelectedState] = useState("Problems");
  return (
    <div className="bg-[#282828]">
      <div className="flex items-center">
        <div className="p-4">
          <FlameKindling color="#FFA116" width={30} height={30} />
        </div>
        <div className="flex mx-10 gap-10">
          {navbarItems.map(({ name, href }, idx) => (
            <div
              key={idx}
              className={`border-4 ${selectedState == name && "border-b-white"} p-4`}
              onClick={() => setSelectedState(name)}
            >
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
