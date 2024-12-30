"use client";
import React, { useEffect, useState } from "react";

const LiveCount = ({ Id }: { Id: string }) => {
  const [usersCount, setUsersCount] = useState(0);
  useEffect(() => {
    const ws = new WebSocket(`ws://localhost:4000?problemId=${Id}`);
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (event) => {
      const parsedata = JSON.parse(event.data);
      setUsersCount(parsedata.count);
    };
  }, [Id]);

  return (
    <div className="absolute bottom-[-10px] right-0">
      <div className="gap-2 p-2 flex items-center">
        <div className="w-2 h-2 bg-[#2CBB5D] rounded-full"></div>
        <p>{usersCount} Online</p>
      </div>
    </div>
  );
};

export default LiveCount;
