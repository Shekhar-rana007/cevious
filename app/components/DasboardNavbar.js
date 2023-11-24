import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import React from "react";
import { LuCalendarRange } from "react-icons/lu";
import { PiWechatLogoBold } from "react-icons/pi";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
const DasboardNavbar = () => {
  return (
    <div className="bg-white border-b flex-wrap border-gray-200 fixed z-30 w-[100%] md:w-[100%]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center flex-wrap justify-start gap-5">
          <div className="flex items-center justify-start gap-36 ">
            <span className="self-center whitespace-nowrap">Logo</span>
            <MdKeyboardDoubleArrowLeft size={20} />
          </div>
          <div className="md:flex md:items-center  md:gap-12">
            <div className="flex gap-10 ">
              <div className="">
                <span
                  className=" w-56 h-10 gap-10 rounded-xl flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#F9F8FA" }}
                >
                  <p>2022-2023</p>
                  <LuCalendarRange color="black" />
                </span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="">
                <span
                  className=" md:w-48 md:h-10 md:gap-10 rounded-xl flex flex-row justify-center items-center"
                  style={{ backgroundColor: "#F6F0FF" }}
                >
                  <p>select organization</p>
                </span>
              </div>
              <div>
                <span
                  className=" w-10 h-10 rounded-xl flex justify-center items-center"
                  style={{ backgroundColor: "#F6F0FF" }}
                >
                  <PiWechatLogoBold color="black" />
                </span>
              </div>
              <div>
                <span
                  className=" w-10 h-10 rounded-xl flex justify-center items-center"
                  style={{ backgroundColor: "#F6F0FF" }}
                >
                  <IoNotificationsSharp color="black" />
                </span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <FaUserCircle size={35} />
                <div>
                  <h2 className="text-lg font-semibold font-mono">
                    Lallit Pal
                  </h2>
                  <h2 className="text-lg font-semibold font-mono flex justify-center items-center">
                    Admin
                    <MdArrowDropDown size={20} />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasboardNavbar;
