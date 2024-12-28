import Frontnavbar from "@/components/Frontnavbar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-lightBg w-full min-h-screen">
      <Frontnavbar />
      {children}
    </div>
  );
};

export default Layout;
