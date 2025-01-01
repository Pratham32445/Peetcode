import { WebSocket } from "ws";

export class RoomManager {
  private rooms: Map<string, { users: WebSocket[]; moderatorId: string }> =
    new Map();

  joinRoom(roomId: string) {
    
  }
}
