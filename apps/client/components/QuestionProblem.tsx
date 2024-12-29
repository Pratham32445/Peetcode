import { Problem } from "@/types";
import React from "react";
import ReactMarkDown from "react-markdown";
import { ScrollArea } from "@/components/ui/scroll-area";

const Difficulty = {
  MEDIUM: "#FFA116",
  EASY: "#117B6F",
  HARD: "#CC3352",
};

const desc = `# 

Given an integer array \`nums\` and an integer \`k\`, find **three non-overlapping subarrays** of length \`k\` with the **maximum sum** and return them.

- Return the result as a **list of indices** representing the starting position of each interval (0-indexed).
- If there are multiple answers, return the **lexicographically smallest** one.

This problem can be broken into several key steps:
1. Identify all subarrays of length \`k\`.
2. Calculate the sum of each subarray.
3. Select three subarrays such that:
   - They do not overlap.
   - Their combined sum is the maximum.
   - If there are multiple solutions, select the one that is lexicographically smallest.

---`;

const QuestionProblem = ({ problem }: { problem: Problem }) => {
  return (
    <div className="w-full min-h-full">
      <ScrollArea style={{ height: "calc(90vh - 100px)" }}>
        {" "}
        {/* Set height to fill available space */}
        <div className="p-4 px-6">
          <div>
            <h1 className="capitalize text-2xl">{problem.title}</h1>
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
            <div className="bg-hoverColor px-4 py-2 rounded-full">
              <p className="text-xs">Companies</p>
            </div>
          </div>
          <div className="mt-5 tracking-wider opacity-60">
            <p>Problem Description: {"\n"}</p>
            <ReactMarkDown>{desc}</ReactMarkDown>
          </div>
          <div className="mt-5 opacity-60">
            <p>Examples: {"\n\n"}</p>
            <ReactMarkDown>
              {problem.example.map((exm) => `${exm}\n\n`).join("")}
            </ReactMarkDown>
          </div>
          <div className="mt-5 opacity-60">
            <p>Constraints: {"\n\n"}</p>
            <ReactMarkDown>
              {problem.constraints.map((cons) => `${cons}\n\n`).join("")}
            </ReactMarkDown>
          </div>
          <div className="mt-[20px] flex gap-5">
            <div>
              Accepted :{" "}
              {problem.acceptancerate ? problem.acceptancerate : "100%"}
            </div>
            <div>Submissions : {problem.Submissions?.length}</div>
            <div>Acceptance Rate : {"100%"}</div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default QuestionProblem;
