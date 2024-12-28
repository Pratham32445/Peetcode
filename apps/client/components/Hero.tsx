"use client";
import React, { useState } from "react";
import Heroactivity from "./Heroactivity";

const heroAcitivityData = [
  {
    title: "Practice Problems",
    desc: "solve the curated list of problems",
    button: "Solve",
    color: ["amber", "yellow"],
    defaultValue: ["amber", "yellow"],
  },
  {
    title: "Practice Problems",
    desc: "solve the curated list of problems",
    button: "Solve",
    color: ["white", "black"],
    defaultValue: ["amber", "yellow"],
  },
  {
    title: "Practice Problems",
    desc: "solve the curated list of problems",
    button: "Solve",
    color: ["green", "green"],
    defaultValue: ["amber", "yellow"],
  },
];

const Hero = () => {
  const [hoverState, setHoverState] = useState({ colors: ["amber", "yellow"] });
  console.log(hoverState);
  return (
    <section className="relative z-10 py-20 w-full min-h-full bg-gradient-to-b">
      <div
        className={`absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 opacity-10 blur-[100px] bg-gradient-to-b from-${hoverState.colors[0]}-400 to-${hoverState.colors[1]}-400`}
      ></div>
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <div className="flex flex-col items-center">
          <h1
            className={`inline-flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-amber-700 to-yellow-300 bg-clip-text text-transparent`}
          >
            <span>AlgoHub</span>
            <span className="text-4xl mt-10">
              Best Place to Prepare for Technical Interview &apos;s
            </span>
          </h1>
          <button className="rounded-full hover:opacity-100 bg-gradient-to-r from-amber-700 to-yellow-300 cursor-pointer transition  px-4 py-3 mt-5 b">
            Start Preparing
          </button>
        </div>
        <div className="mt-5 grid gap-2 md:mt-16 md:grid-cols-3">
          {heroAcitivityData.map((activity, idx) => (
            <Heroactivity
              key={idx + Math.random()}
              setHoverState={setHoverState}
              activity={activity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
