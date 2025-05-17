import * as net from "net";

function newConn(socket: net.Socket): void {
    console.log("new connection", socket.remoteAddress, socket.remotePort);
    console.log("new connection", socket.localAddress, socket.localPort);

    socket.on("data", (data: Buffer) => {
        console.log("data", data);
        socket.write(data); // echo back the data.

        if (data.includes("q")) {
            console.log("closing");
            socket.end(); // this will send FIN and close the connection.
        }
    })
}

let server = net.createServer();
server.on("connection", newConn);

server.on("error", (err: Error) => {
    console.log("encounter error", err);
    throw err;
});

server.listen({ host: '127.0.0.1', port: 1234 }, () => {
    console.log("Server listening on 127.0.0.1");
});