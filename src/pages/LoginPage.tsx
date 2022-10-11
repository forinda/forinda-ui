import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const googleLogin = () => {
    window.open("http://localhost:6200/api/v1/auth/google", "_self");
  };
  const githubLogin = () => {
    window.open("http://localhost:6200/api/v1/auth/github", "_self");
    };
  const logout = async () => {
    const res = await fetch("http://localhost:6200/api/v1/auth/logout", {
        method:'GET',
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Alllow-Control-Allow-Origin": "http://localhost:6200",
        "Access-Control-Allow-Credentials": "true",
      },
    });
    console.log(await res);
    
  };
  return (
    <div>
      <button
        onClick={googleLogin}
        className="bg-red-400 text-white border py-2 px-4 rounded-lg"
      >
        <FontAwesomeIcon icon={faGoogle} /> Google Login
      </button> <button
        onClick={githubLogin}
        className="bg-gray-400 text-white border py-2 px-4 rounded-lg"
      >
        <FontAwesomeIcon icon={faGithub} color="black"/> Github Login
      </button>
      <button
        onClick={logout}
        className="bg-red-400 text-white border py-2 px-4 rounded-lg"
      >
        <FontAwesomeIcon icon={faTrash} /> Logout
      </button>
    </div>
  );
};

export default LoginPage;
