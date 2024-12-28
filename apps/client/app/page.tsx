import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="bg-lightBg pt-[80px] w-full min-h-screen">
      <Navbar />
      <div className="w-full h-full text-center">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
