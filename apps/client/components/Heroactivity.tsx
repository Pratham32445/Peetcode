"use client";
import React from "react";

const Heroactivity = ({
  setHoverState,
  activity,
}: {
  activity: any;
  setHoverState: any;
}) => {
  const { title, desc, button, color } = activity;
  return (
    <div className="relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg hover:scale-[1.02] hover:bg-white/10">
      <h3 className="text-white text-lg">{title}</h3>
      <p className="mt-2 grow opacity-60 text-white">{desc}</p>
      <button className="cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 ">
        {button}
      </button>
    </div>
  );
};

export default Heroactivity;
