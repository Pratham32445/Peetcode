import { WebSocketServer } from "ws";
import { ProblemManager } from "./ProblemManager.js";
import client from "./db/index.js";

const wss = new WebSocketServer({ port: 4000 });

const Manager = new ProblemManager();

wss.on("connection", async (ws : WebSocket, req) => {
  const url = new URLSearchParams(req.url?.split("?")[1]);
  const problemId = url.get("problemId");
  if (!problemId) return;
  const isProblem = await client.question.findFirst({
    where: { Id: problemId },
  });
  if (!isProblem || !ws) return;
  Manager.joinUser(problemId, ws);
  ws.onmessage = async (event) => {
    const data = await JSON.parse(event.data.toString());
    console.log(data);
    Manager.removeUser(data.payload.problemId,ws);
  };
});
