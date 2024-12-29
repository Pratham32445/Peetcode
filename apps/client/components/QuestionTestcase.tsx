"use client";

import React, { useState } from "react";
import ReactMarkDown from "react-markdown";

const QuestionTestcase = ({
  InputsTestCases,
  outputTestCases,
}: {
  InputsTestCases: string[];
  outputTestCases: string[];
}) => {
  const [selectedTestCase, setSelectedTestCase] = useState(0);
  return (
    <div className="bg-lightBg rounded w-full h-full">
      <div className="p-5 flex items-center">
        {Array.from({ length: InputsTestCases.length }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedTestCase(idx)}
            className="bg-neutral-800 cursor-pointer px-4 py-2 rounded mx-2"
          >
            <p className="text-white">Case {idx + 1}</p>
          </div>
        ))}
      </div>
      <div>
      </div>
    </div>
  );
};

export default QuestionTestcase;
