import ws, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4001 });

wss.on("connection",()=>{
    
})