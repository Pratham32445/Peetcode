"use client";
import React, { useEffect } from "react";

const LiveCount = ({ Id }: { Id: string }) => {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");
    ws.onopen = () => {
      console.log("connected");
    };
  }, [Id]);

  return <div>LiveCount</div>;
};

export default LiveCount;
