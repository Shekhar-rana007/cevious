"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import { FaRocketchat } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

const AdminTop = () => {
  return (
    <div className="flex items-center flex-wrap lg:flex-nowrap justify-between">
      <button
        id="toggleSidebarMobile"
        aria-expanded="true"
        aria-controls="sidebar"
        className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
        onClick={() => alert("hello")}
      >
        <RxHamburgerMenu size={20} />
      </button>
      <div className="flex items-center  justify-between">
        <div
          className="text-xl gap-5 font-semibold flex items-center 
                lg:ml-5 lg:gap-28"
        >
          <span className="self-center whitespace-nowrap">Logo</span>
          <MdKeyboardDoubleArrowLeft />
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-5">
        <div className="hidden lg:flex items-center">
          <span
            className=" text-gray-600 w-9 p-3 rounded-xl mr-5"
            style={{ background: "#F9F8FA" }}
          >
            <RxDashboard />
          </span>
          <div className="">
            <div
              className="hidden sm:inline-flex text-gray-600 font-medium rounded-lg text-sm px-2 py-2 text-center items-center gap-3"
              style={{ background: "#F9F8FA" }}
            >
              2022-2023
              <LuCalendarDays />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center lg:gap-3">
          <div className="">
            <div
              className="hidden sm:inline-flex text-gray-600 font-medium rounded-lg text-sm px-2 py-2 text-center items-center gap-3"
              style={{ background: "#F9F8FA" }}
            >
              Select Organisation
            </div>
          </div>
          <div className="">
            <div
              className="hidden sm:inline-flex text-gray-600 font-medium rounded-lg text-sm px-2 py-2 text-center items-center gap-3"
              style={{ background: "#F9F8FA" }}
            >
              <FaRocketchat size={20} />
            </div>
          </div>
          <div className="">
            <div
              className="hidden sm:inline-flex text-gray-600 font-medium rounded-lg text-sm px-2 py-2 text-center items-center gap-3"
              style={{ background: "#F9F8FA" }}
            >
              <MdNotificationsActive size={20} />
            </div>
          </div>
          <div className="">
            <div
              className="hidden sm:inline-flex text-gray-600 font-medium rounded-lg text-sm px-2 py-2 text-center items-center gap-3"
              style={{ background: "#F9F8FA" }}
            >
              <FaUser />
            </div>
          </div>
          <div className="flex flex-col items-start w-81 flex-shrink-0">
            <span className="text-xs">Lallit Pal</span>
            <span className="text-xs flex">
              Admin
              <MdOutlineArrowDropDown size={15} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTop;
