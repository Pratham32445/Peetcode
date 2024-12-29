import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port : 4000});

wss.on("connection",(ws)=>{
    
})