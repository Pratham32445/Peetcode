import React from "react";
import Heroactivity from "./Heroactivity";
import WordRotate from "./ui/word-rotate";

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
  return (
    <main className="text-center py-24 min-h-full">
      <section className="relative z-10  h-full">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-emerald-500">
          {" "}
        </div>
        <div className="mx-auto max-w-screen-xl px-6 md:px-10">
          <h1 className="inline-flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300">
            <span>Peet Code</span>
            <span className="text-3xl my-3">
              <WordRotate
                className="text-4xl font-bold text-black dark:text-white"
                words={[
                  "Say no to Leetcode Premium!",
                  "Best Place to Prepare for Tehnical Interview",
                ]}
              />
            </span>
          </h1>
          <div className="mt-8 grid gap-2 md:mt-16 md:grid-cols-3">
            {heroAcitivityData.map((activity, idx) => (
              <Heroactivity activity={activity} key={idx} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
