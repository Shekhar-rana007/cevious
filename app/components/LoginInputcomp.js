import React from "react";
import { FaEye } from "react-icons/fa";
import ButtonComp from "./ButtonComp";
const LoginInput = () => {
  return (
    <>
      <form>
        <div className="flex flex-col mb-3">
          <label htmlFor="username" className="mb-1 text-sm font-bold">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="johnadave"
            className="border-b border-bottom-gray-300 rounded-md p-2 focus:outline-none focus:border-purple-400"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="mb-1 text-sm font-bold">
            email
          </label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@email.com"
            className="border-b rounded-md p-2 focus:outline-none focus:border-purple-400"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="phone" className="mb-1 text-sm font-bold">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="+91 9877565454"
            className="border-b rounded-md p-2 focus:outline-none focus:border-purple-400"
          />
        </div>
        <div className="flex flex-col mb-3 border-b rounded-md">
          <label htmlFor="password" className="mb-1 text-sm font-bold">
            Password
          </label>
          <div className="flex items-center border-b rounded-md focus-within:border-purple-400">
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="flex-grow py-1 px-2 focus:outline-none"
            />
            <FaEye className="cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex justify-center items-center gap-2">
            <input type="checkbox" />{" "}
            <p>I accept all the terms nd conditions</p>
          </div>
         <ButtonComp text={"signup"}/>
        </div>
      </form>
    </>
  );
};

export default LoginInput;
