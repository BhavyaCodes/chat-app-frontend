// This endpoint doesn't really do anything. It just starts websockets.
// NextJS does not officially support websockets. NextJS is intended for deployment
// to serverless environments, which are mostly incompatible with websockets.
// This application will have to be deployed to Heroku or a similar non-serverless
// environment.
// This solution is by rogeriojlle on StackOverflow:
// https://stackoverflow.com/questions/57512366/how-to-use-socket-io-with-next-js-api-routes/62547135#62547135
import {Server} from "socket.io"
import styles from '../styles/Home.module.css'

const ioHandler = (_req, res) => {
  // if the socket server hasn't started yet, start it up.
  if (!res.socket.server.io) {
    console.log("First use, starting socket.io");

    // create the websocket server
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      // when a message is submitted, broadcast it.
      socket.on("message-submitted", (msg) => {
        // echo the message back to the user
        socket.emit("message", msg);
        // broadcast the message to everyone else
        socket.broadcast.emit("message", msg);
       });
    });

    // make the socket available externally.
    res.socket.server.io = io;
  } else {
    // don't do anything if the server was already started.
    console.log("Server already started");
  }

  // send back an empty 200
  res.end();
};

export default ioHandler;