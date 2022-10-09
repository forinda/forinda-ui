import React from 'react'
import { io } from "socket.io-client";

const App = () => {

  const socket = io("http://localhost:6200");
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", (data:any) => {
      console.log("disconnected", data);
    })

  }, []);
  return (
    <div>App</div>
  )
}

export default App