import { WebSocketServer } from "ws";
import { ProblemManager } from "./ProblemManager";

const wss = new WebSocketServer({ port: 4000 });

const Manager = new ProblemManager();

wss.on("connection", (ws,req) => {
    const url = new URLSearchParams(req.url?.split("?")[1]);
    const problemId = url.get("problemId");
    if(!problemId) return ;
    Manager.joinUser(problemId,ws);
});
