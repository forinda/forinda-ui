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
      method: "GET",
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
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="flex gap-6 p-10 shadow shadow-slate-500 rounded-md">
        <div className="flex flex-col gap-5">
          <button
            onClick={googleLogin}
            className="bg-red-400 text-white border py-2 px-4 rounded-lg"
          >
            <FontAwesomeIcon icon={faGoogle} /> Google Login
          </button>{" "}
          <button
            onClick={githubLogin}
            className="bg-gray-400 text-white border py-2 px-4 rounded-lg"
          >
            <FontAwesomeIcon icon={faGithub} color="black" /> Github Login
          </button>
          {/* <button
            onClick={logout}
            className="bg-red-400 text-white border py-2 px-4 rounded-lg"
          >
            <FontAwesomeIcon icon={faTrash} /> Logout
          </button> */}
        </div>
        <div className="h-full flex justify-center items-center bg-red-400">
          <span className="rounded-full shadow-md p-2 mx-auto">or</span>
        </div>
        <div>
          <form action="flex flex-col gap-4">
            {["email", "password"].map((i) => (
              <div className="flex flex-col">
                <label className="capitalize">{i}</label>
                <input
                  type="text"
                  name={i}
                  placeholder={i}
                  className="border px-4 py-1 rounded"
                />
              </div>
            ))}
            <button className="uppercase bg-blue-600 text-white w-full my-4 rounded-lg px-4 py-2 text-xl">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
