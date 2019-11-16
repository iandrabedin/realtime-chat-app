import React, { useEffect } from "react";
import io from "socket.io-client";

let socket;

// TODO: change it to props
const name = "Iandra";

const Chat = () => {
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);

    console.log(socket);
  }, [ENDPOINT, name]);

  return <h1>Chat</h1>;
};

export default Chat;
