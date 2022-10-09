import React from 'react'
import { io } from "socket.io-client";

const App = () => {

  const socket = io("http://localhost:6200");
  React.useEffect(() => {
    socket.on("connect", (data:any) => {
      console.log("connected", data);
    });
  }, []);
  return (
    <div>App</div>
  )
}

export default App