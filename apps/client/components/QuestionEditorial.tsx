import React from "react";

const QuestionEditorial = ({ editorial }: { editorial: string }) => {
  return (
    <div className="min-h-full">
      {editorial ? (
        <div>{editorial}</div>
      ) : (
        <div className="flex min-h-full h-[50vh] justify-center items-center">
          <div>
            <h2 className="text-xl text-center">Coming soon...</h2>
            <p className="text-neutral-500 text-xs">We are actively working on it</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionEditorial;
