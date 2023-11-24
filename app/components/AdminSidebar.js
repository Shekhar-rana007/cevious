import React from "react";
import { AiFillHome } from "react-icons/ai";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaRegMoneyBillAlt } from "react-icons/fa";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
// import { RiFileUserFill } from "react-icons/ri";
// import { FaUserLarge } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdConnectWithoutContact } from "react-icons/md";
import { TfiMoney } from "react-icons/tfi";
import { ImFeed } from "react-icons/im";
import { TiBusinessCard } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const AdminSidebar = () => {
  const ultext = [
    { text: "dashboard", icon: <AiFillHome size={20} /> },
    {
      text: "sales",
      icon: <FaRegMoneyBillAlt size={20} />,
      othericon: <IoIosArrowForward size={20} />,
    },
    {
      text: "purchase",
      icon: <FaRegMoneyBillAlt size={20} />,
      othericon: <MdOutlineKeyboardArrowDown size={20} />,
    },
  ];
  const secultext = [
    { text: "vendors" },
    { text: "Bills" },
    { text: "payment Mode" },
    { text: "debit Notes" },
    { text: "payable" },
  ];
  const fourultext = [
    { text: "Feed" },
    { text: "chat and call" },
    { text: "calander" },
    { text: "online document" },
    { text: "workgroups" },
  ];
  const fifthtext = [
    {
      text: "notification",
      icon: <RiFileUserFill />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "statistics",
      icon: <FaUserLarge />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
  ];
  const sixthtext = [
    {
      text: "FAQs",
      icon: <RiQuestionnaireFill />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "help",
      icon: <LiaHandsHelpingSolid />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "contact us",
      icon: <MdConnectWithoutContact />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "feedback",
      icon: <ImFeed />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "rate our app",
      icon: <TfiMoney />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "account",
      icon: <TiBusinessCard />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
    {
      text: "settings",
      icon: <FiSettings />,
      otherIcon: <IoIosArrowForward size={20} />,
    },
  ];
  const seventhtext = [
    { text: "user & role" },
    { text: "permissions" },
    { text: "prefences" },
    { text: "reminder" },
    { text: "reminder" },
  ];
  return (
    <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex-1 px-3 bg-white divide-y space-y-1">
          <ul className="space-y-2 pb-2">
            {ultext.map((val, id) => (
              <div className="flex  text-gray-900 font-normal rounded-lg hover:bg-gray-100 justify-between p-2 items-center gap-1">
                <div className="flex items-center gap-2">
                  {val.icon}
                  <span className="text-base">{val.text}</span>
                </div>
                {val.othericon}
              </div>
            ))}
          </ul>
          {/* --------------------2nd tags------------------ */}
          <div className="p-5 bg-gray-50 rounded-lg">
            <div className="border bg-slate-300 p-3 rounded-lg">
              <ul className="list-disc list-inside cursor-pointer">
                {secultext.map((val, id) => (
                  <li key={id} className="p-2 uppercase text-sm ">
                    {val.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* -------------------3rd tag------------------ */}

          <div className="flex text-gray-900 font-normal rounded-lg hover:bg-gray-100 justify-center p-2 items-center gap-1">
            <PiHandshakeLight size={20} />
            <span className="text-base">Collabration</span>
            <MdOutlineKeyboardArrowDown size={20} />
            <div className="ml-3 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>

          {/* ------------4th tags------------- */}
          <div className="p-5 bg-gray-50 rounded-lg">
            <div className="border bg-slate-300 p-2 rounded-lg">
              <ul className="list-disc list-inside cursor-pointer">
                {fourultext.map((val, id) => (
                  <li key={id} className="p-2 capitalize text-sm ">
                    {val.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* ----------5th others--------- */}
          <div className="pt-2">
            <h1 className="text-start">Others</h1>
            {fifthtext.map((val, id) => {
              return (
                <>
                  <div className="flex  text-gray-900 font-normal rounded-lg hover:bg-gray-100 justify-between p-2 items-center gap-1">
                    <div className="flex items-center gap-2">
                      {val.icon}
                      <span className="text-base">{val.text}</span>
                    </div>
                    {val.otherIcon}
                  </div>
                </>
              );
            })}
          </div>

          {/* ----------6th tag--------------- */}
          <div className="pt-2">
            <h1 className="text-start">Others</h1>
            {sixthtext.map((val, id) => {
              return (
                <>
                  <div className="flex  text-gray-900 font-normal rounded-lg hover:bg-gray-100 justify-between p-2 items-center gap-1">
                    <div className="flex items-center gap-2">
                      {val.icon}
                      <span className="text-base">{val.text}</span>
                    </div>
                    {val.otherIcon}
                  </div>
                </>
              );
            })}
          </div>

          {/* ------------------7th tag---------------- */}
          <div className="p-5 bg-gray-50 rounded-lg">
            <div className="border bg-slate-300 p-3 rounded-lg">
              <ul className="list-disc list-inside cursor-pointer">
                {seventhtext.map((val, id) => (
                  <li key={id} className="p-2 uppercase text-sm ">
                    {val.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* --------------------log-out--------------- */}
          <div className="pt-2">
            <div className="flex  text-gray-900 font-normal rounded-lg hover:bg-gray-100 justify-center p-2 items-center gap-1">
              <div className="flex items-center gap-2">
                <IoMdLogOut />
                <span className="text-base">Log Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
