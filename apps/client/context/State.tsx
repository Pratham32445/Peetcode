"use client";

import React, { createContext, useState } from "react";

export const MainContext = createContext(null);

const State = ({ children }: { children: any }) => {
  const [isProblemSubmitted, setIsProblemSubmitted] = useState<{
    status: boolean;
    submissionID: null | string;
  }>({ status: false, submissionID: null });

  const contextValue = { isProblemSubmitted, setIsProblemSubmitted};

  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default State;
