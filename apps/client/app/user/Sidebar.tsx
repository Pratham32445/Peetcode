"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const userProfileSidebar = [
  {
    title: "Profile",
    href: "/user/profile",
  },
  {
    title: "Account",
    href: "/user/account",
  },
  {
    title: "Badges",
    href: "/user/badges",
  },
  {
    title: "Reffaral",
    href: "/user/reffaral",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [setPath, setSetPath] = useState(
    pathname.split("/")[pathname.split("/").length - 1]
  );
  return (
    <div className="w-full p-1 bg-[#1E1E1E] min-h-full rounded-lg">
      {userProfileSidebar.map(({ title, href }, idx) => (
        <div
          className={`px-10 my-2 py-5 cursor-pointer ${title.toLowerCase() == setPath && "bg-[#454545]"} hover:bg-[#454545] rounded`}
          key={idx}
          onClick={() => setSetPath(title)}
        >
          <Link href={href}>{title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
