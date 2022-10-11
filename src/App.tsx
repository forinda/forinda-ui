import React from "react";
import { io } from "socket.io-client";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const socket = io("http://localhost:6200");
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", (data: any) => {
      console.log("disconnected", data);
    });
  }, []);
  const fetchUser = async () => {
    const res = await fetch(
      "http://localhost:6200/api/v1/auth/google/login/success",
      {
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Alllow-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );
    const data = await res.json();
    console.log(data);
  };
  React.useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;
