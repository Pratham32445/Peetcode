"use client";

import React, { createContext, useState } from "react";

export const MainContext = createContext<any>(null);

const State = ({ children }: { children: React.ReactNode }) => {
  const [isProblemSubmitted, setIsProblemSubmitted] = useState<{
    status: boolean;
    submissionID: null | string;
  }>({ status: false, submissionID: null });

  const [hoverState, setHoverState] = useState<string[]>();

  const contextValue = {
    isProblemSubmitted,
    setIsProblemSubmitted,
    hoverState,
    setHoverState,
  };

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default State;
