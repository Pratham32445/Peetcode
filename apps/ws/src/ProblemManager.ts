import { WebSocket } from "ws";

export class ProblemManager {
  private Problem: Map<string, WebSocket[]> = new Map();
  constructor() {
    this.Problem = new Map<string, WebSocket[]>();
  }
  joinUser(problemId: string, ws: WebSocket) {
    if (!this.Problem.has(problemId)) this.Problem.set(problemId, []);
    let users = this.Problem.get(problemId) ?? [];
    const isUserPresent = users?.find((user) => user == ws);
    if (!isUserPresent) {
      users?.push(ws);
      this.Problem.set(problemId, users);
      this.notifyUser({ type: "notify", count: users.length }, problemId);
    }
  }
  removeUser(problemId: string, ws: WebSocket) {
    if (!this.Problem.has(problemId)) this.Problem.set(problemId, []);
    let users = this.Problem.get(problemId) ?? [];
    const isUserPresent = users?.find((user) => user == ws);
    if (!isUserPresent) {
      users.filter((user) => user != ws);
      this.Problem.set(problemId, users);
      this.notifyUser({ type: "notify", count: users.length }, problemId);
    }
  }
  notifyUser(message: any, problemId: string) {
    const users = this.Problem.get(problemId);
    users?.forEach((user) => {
      user.send(JSON.stringify(message));
    });
  }
}
