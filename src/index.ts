import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });


let userCount = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    allSockets.push(socket);

    userCount = userCount + 1;
    console.log("user connected #" + userCount);

    socket.on("message", (e) => {
        console.log("message received " + e.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(e.toString() + ": sent from the server")
        }
        

        
    })

})