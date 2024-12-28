import { Watch } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-5 flex items-center">
      <div>
        <p>Daily Problem</p>
      </div>
      <div>
        <Watch />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
