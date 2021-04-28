import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import UsernameField from "../components/UsernameField";



  
export default function Home() {
  // save the socket
  const [socket, setSocket] = useState(null);

  // Whether the username is set.
  const [isUsernameConfirmed, setUsernameConfirmed] = useState(false);

  // State for the username.
  const [username, setUsername] = useState("");

  // State for the form field.
  const [message, setMessage] = useState("");

  // State for message history.
  const [history, setHistory] = useState([
    /*
    {
      username: "Santa Claus",
      message: "Ho ho ho!"
    }
    */
  ]);

  const connectSocket = () => {
    // prime the server first. yes, this is an extra call and is inefficient.
    // but we're using NextJS for convenience, so this is a necessary evil.
    fetch("/api/chat");
    // after making sure that socket server is primed, connect to it.

    if (!socket) {
      const newSocket = io();

      // Confirms connection
      newSocket.on("connect", () => {
        console.log("Chat app connected");
      });

      // handles message
      newSocket.on("message", (msg) => {
        setHistory((history) => [...history, msg]);
      });

      // Logs when server disconnects
      newSocket.on("disconnect", () => {
        console.warn("WARNING: chat app disconnected");
      });

      setSocket(() => newSocket);
    }
  };

  // The websocket code
  useEffect(() => {
    connectSocket();
  }, []);

  // this method submits the form and sends the message to the server.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!socket) {
      alert("Chatroom not connected yet. Try again in a little bit.");
      return;
    }

    // prevent empty submissions
    if (!message || !isUsernameConfirmed) {
      return;
    }

    // submit and blank-out the field.
    socket.emit("message-submitted", { message, username });
    setMessage("");
  };
//  const websocket=require("ws") 
//   const rooms = {};

//   ws.on("connection", socket => {
//     const uuid = uuid // create here a uuid for this connection
  
//     const leave = room => {
//       // not present: do nothing
//       if(! rooms[room][uuid]) return;
  
//       // if the one exiting is the last one, destroy the room
//       if(Object.keys(rooms[room]).length === 1) delete rooms[room];
//       // otherwise simply leave the room
//       else delete rooms[room][uuid];
//     };
  
//     socket.on("message", data => {
//       const { message, meta, room } = data;
  
//       if(meta === "join") {
//         if(! rooms[room]) rooms[room] = {}; // create the room
//         if(! rooms[room][uuid]) rooms[room][uuid] = socket; // join the room
//       }
//       else if(meta === "leave") {
//         leave(room);
//       }
//       else if(! meta) {
//         // send the message to all in the room
//         Object.entries(rooms[room]).forEach(([, sock]) => sock.send({ message }));
//       }
//     });
  
//     socket.on("close", () => {
//       // for each room, remove the closed socket
//       Object.keys(rooms).forEach(room => leave(room));
//     });
//   });




  return (
    

  
    
   <div className={styles.chat_window}>
      <Head>
        <title >chit-chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <embed src="https://www.youtube.com/watch?v=32oQrjSCUTw&t=4s" loop="true" autostart="true" width="2" height="0"></embed>

      
      <h1 className={styles.top_menu}className={styles.text}> Game of thrones </h1>

      <div className={styles.alignment} >
      <UsernameField className={styles.second_bar}
        completed={isUsernameConfirmed}
        value={username}
        onChange={(value) => setUsername(value)}
        onSubmit={() => setUsernameConfirmed(true)}
      /></div>
{/*   <ul class="messages"></ul>
    <div class="bottom_wrapper clearfix">*/}

      <div  className={styles.message_container}>
        {history.map(({ username, message }, i)  => (
          <div className={styles.chatbox} key={i}> 
            <p> </p>
            <p><b>{username}</b>: {message}
            </p></div>
        ))}
        </div>
      
        <div className={styles.alignment}>
        <div className={styles.bottom_wrapper .message_input_wrapper}>
          <main className={styles.bottom_wrapper}>
          
          <form  onSubmit={handleSubmit}>
          <label >
            
            <input className={styles.message_input}
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                username ? "Enter your message..." : "Set username..."
              }
              disabled={!isUsernameConfirmed}
            />
          </label>
          <input className={styles.submit}type="submit" value="Submit" disabled={!isUsernameConfirmed} />
        </form></main>
        </div></div>


      
      {/* <footer className={styles.footera}>
        
      </footer> */}
    </div>
  )}
