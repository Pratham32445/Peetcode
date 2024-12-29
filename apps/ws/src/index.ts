import { WebSocketServer } from "ws";
import { ProblemManager } from "./ProblemManager.js";

const wss = new WebSocketServer({ port: 4000 });

const Manager = new ProblemManager();

wss.on("connection", async (ws, req) => {
  const url = new URLSearchParams(req.url?.split("?")[1]);
  const problemId = url.get("problemId");
  if (!problemId) return;
  const isProblem = await client.question.findFirst({
    where: { Id: problemId },
  });
  if (!isProblem) return;
  Manager.joinUser(problemId, ws);
});
