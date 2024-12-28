import { Problem } from "@/types";
import React from "react";

const Difficulty = {
  MEDIUM: "#FFA116",
  EASY: "#117B6F",
  HARD: "#CC3352",
};

const QuestionProblem = ({ problem }: { problem: Problem }) => {
  return (
    <div className="w-full min-h-full">
      <div className="p-4 px-6">
        <div>
          <h1 className="capitalize text-2xl">1. {problem.title}</h1>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="bg-hoverColor px-4 py-2 rounded-full">
            <p
              className="text-xs"
              style={{ color: Difficulty[problem.difficulty] }}
            >
              {problem.difficulty}
            </p>
          </div>
          <div className="bg-hoverColor px-4 py-2 rounded-full">
            <p className="text-xs">Topics</p>
          </div>
          <div className="bg-hoverColor px-4 py-2 rounded-full ">
            <p className="text-xs">Companies</p>
          </div>
        </div>
        <div>
          <p className="mt-5 tracking-wider opacity-60">{problem.desc}</p>
        </div>
        <div className="mt-5">
          <p>Examples</p>
        </div>
        <div className="mt-5">
          <p>Constraints</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionProblem;
