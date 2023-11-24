"use client";
import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiFileUserFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { PiHandshakeLight } from "react-icons/pi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdConnectWithoutContact } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";
import { ImFeed } from "react-icons/im";
import { TiBusinessCard } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const AdminNewsidebar = () => {
  const [category, setCategory] = useState("");
  const asidedata = [
    { text: "dashboard", icon: <ImHome /> },
    {
      text: "sales",
      icon: <FaRegMoneyBillAlt size={20} />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "purchase",
      icon: <FaRegMoneyBillAlt size={20} />,
      othericons: <MdOutlineKeyboardArrowDown size={20} />,
    },
    {
      text: "collabration",
      icon: <PiHandshakeLight size={20} />,
      othericons: <MdOutlineKeyboardArrowDown size={20} />,
    },
    {
      text: "notification",
      icon: <RiFileUserFill />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "statistics",
      icon: <FaUserLarge />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "FAQs",
      icon: <RiQuestionnaireFill />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "help",
      icon: <LiaHandsHelpingSolid />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "contact us",
      icon: <MdConnectWithoutContact />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "feedback",
      icon: <ImFeed />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "rate our app",
      icon: <TfiMoney />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "account",
      icon: <TiBusinessCard />,
      othericons: <IoIosArrowForward size={20} />,
    },
    {
      text: "settings",
      icon: <FiSettings />,
      othericons: <IoIosArrowForward size={20} />,
    },
  ];
  const subasidedata = [
    {
      category: "purchase",
      items: [
        { text: "vendors" },
        { text: "Bills" },
        { text: "payment Mode" },
        { text: "debit Notes" },
        { text: "payable" },
      ],
    },
    {
      category: "collabration",
      items: [
        { text: "Feed" },
        { text: "chat and call" },
        { text: "calander" },
        { text: "online document" },
        { text: "workgroups" },
      ],
    },
    {
      category: "settings",
      items: [
        { text: "user & role" },
        { text: "permissions" },
        { text: "prefences" },
        { text: "reminder" },
        { text: "reminder" },
      ],
    },
  ];

  const handleItemClick = (text) => {
    console.log(text);
    setCategory(text);
  };
  return (
    <div className="relative flex-1  flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div className=" flex flex-col pt-5 gap-3 overflow-y-auto">
        <div className="pl-12 bg-white divide-y space-y-1">
          {asidedata.slice(0, 4).map((val, id) => (
            <>
              <ul key={id} className="pb-1 outline-none border-none">
                <li onClick={() => handleItemClick(val.text)}>
                  <span className="text-base asidespan bg-gray-100 text-gray-900 font-normal rounded-l-2xl cursor-pointer hover:text-white flex items-center p-2 group">
                    {val.icon}
                    <span className="ml-3 capitalize flex-1 whitespace-nowrap">
                      {val.text}
                    </span>
                    {val.othericons && (
                      <span className="ml-3">{val.othericons}</span>
                    )}
                  </span>
                </li>
              </ul>
              {category === val.text && (
                <>
                  {subasidedata.find((item) => item.category === category) && (
                    <div className="p-2 bg-gray-50  rounded-lg">
                      <div className="bg-slate-300 p-2 rounded-lg">
                        <ul className="list-disc list-inside cursor-pointer">
                          {subasidedata
                            .find((item) => item.category === category)
                            ?.items.map((value, index) => (
                              <li
                                key={index}
                                className="p-2 capitalize text-xs"
                              >
                                {value.text}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ))}
        </div>

        <div className="pl-12  bg-white divide-y space-y-1">
          <span className="mt-2">Others</span>
          {asidedata.slice(4, 6).map((val, id) => (
            <>
              <ul key={id} className="pb-1 outline-none border-none">
                <li onClick={() => handleItemClick(val.text)}>
                  <span className="text-base asidespan bg-gray-100 text-gray-900 font-normal rounded-l-2xl cursor-pointer hover:text-white flex items-center p-2 group">
                    {val.icon}
                    <span className="ml-3 capitalize flex-1 whitespace-nowrap">
                      {val.text}
                    </span>
                    {val.othericons && (
                      <span className="ml-3">{val.othericons}</span>
                    )}
                  </span>
                </li>
              </ul>
              {category === val.text && (
                <>
                  {subasidedata.find((item) => item.category === category) && (
                    <div className="p-2 bg-gray-50  rounded-lg">
                      <div className="bg-slate-300 p-2 rounded-lg">
                        <ul className="list-disc list-inside cursor-pointer">
                          {subasidedata
                            .find((item) => item.category === category)
                            ?.items.map((value, index) => (
                              <li
                                key={index}
                                className="p-2 capitalize text-xs"
                              >
                                {value.text}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ))}
        </div>

        <div className="pl-12  bg-white divide-y space-y-1">
          <span className="mt-2">Support & Feedbacks</span>
          {asidedata.slice(6).map((val, id) => (
            <>
              <ul key={id} className="pb-1 outline-none border-none">
                <li onClick={() => handleItemClick(val.text)}>
                  <span className="text-base asidespan bg-gray-100 text-gray-900 font-normal rounded-l-2xl cursor-pointer hover:text-white flex items-center p-2 group">
                    {val.icon}
                    <span className="ml-3 capitalize flex-1 whitespace-nowrap">
                      {val.text}
                    </span>
                    {val.othericons && (
                      <span className="ml-3">{val.othericons}</span>
                    )}
                  </span>
                </li>
              </ul>
              {category === val.text && (
                <>
                  {subasidedata.find((item) => item.category === category) && (
                    <div className="p-2 bg-gray-50  rounded-lg">
                      <div className="bg-slate-300 p-2 rounded-lg">
                        <ul className="list-disc list-inside cursor-pointer">
                          {subasidedata
                            .find((item) => item.category === category)
                            ?.items.map((value, index) => (
                              <li
                                key={index}
                                className="p-2 capitalize text-xs"
                              >
                                {value.text}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          ))}
        </div>

        <div className="flex-1 pl-12 bg-white divide-y space-y-1">
          <ul className="pb-1 outline-none border-none">
            <li>
              <span className="text-base asidespan bg-gray-100 text-gray-900 font-normal rounded-l-2xl hover:text-white flex items-center p-2 group">
                <IoMdLogOut />
                <span className="ml-3 capitalize flex-1 whitespace-nowrap">
                  Log Out
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminNewsidebar;
