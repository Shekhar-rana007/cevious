import React from "react";
import { handshake, logo } from "@/public/assets/index";

const LoginSidebar = () => {
  return (
    <div
      className="w-full md:w-[24vw] border md:h-fit"
      style={{ background: "#754BD0" }}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={logo.src}
          alt="Logo"
          width="200"
          height="40"
          className="absolute top-12 p-2"
        />
        <img
          src={handshake.src}
          alt="Logo"
          width="346"
          className="relative top-32 h-auto"
        />
        <p className="mt-[87px]
         mb-3 text-lg text-white text-center ">
          Join & Connect the Fastest Growing Online Community
        </p>
        <p
          className="text-xs text-white text-center pl-2 pr-2 mb-3"
          style={{ fontFamily: "Roboto" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
    </div>
  );
};

export default LoginSidebar;
