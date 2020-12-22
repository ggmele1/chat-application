import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";

let socket;
const Chat = ({ location }) => {
  const ENDPOINT = "localhost:5000";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io({ rejectUnauthorized: false, ENDPOINT });

    setName(name);
    setRoom(room);

    // socket.emit("join", { name, room });
    console.log(socket);
  }, [ENDPOINT, location.search]);

  return (
    <>
      <h1>Chat</h1>
      <h1>App</h1>
    </>
  );
};
export default Chat;
