import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });


let userCount = 0;

wss.on("connection", (socket) => {
    userCount = userCount + 1;
    console.log("user connected #" + userCount);

    socket.on("message", (e) => {
        console.log("message received " + e.toString());

        setTimeout(() => {
            socket.send(e.toString() + ": sent from the server")
        },1000);
        
    })

})