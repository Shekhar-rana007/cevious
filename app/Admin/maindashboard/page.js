import React from "react";
import Image from "next/image";
import AdminTop from "@/app/components/AdminTop";

import "./asidebar.css";
import AdminNewsidebar from "@/app/components/AdminNewsidebar";
// import MyChart from "@/app/components/MyChart";
import { FaRupeeSign } from "react-icons/fa";
import { graph1, graph2, graph3, graph4 } from "@/public/assets";
const page = () => {
  const g1data = [
    { text: "sales", percent: "2.4", rs: "12,5622.26", img: graph1 },
    { text: "credit Notes", percent: "2.4", rs: "12,5622.26", img: graph2 },
    { text: "receivable", percent: "2.4", rs: "12,5622.26", img: graph3 },
    // { text: "collection", percent: "2.4", rs: "12,5622.26", img: graph4 },
    // { text: "overdue", percent: "2.4", rs: "12,5622.26", img: graph3 },
  ];
  return (
    <>
      <div>
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            {/* ///// */}
            <AdminTop />
            {/* ////// */}
          </div>
        </nav>
        <div className="flex overflow-hidden bg-white pt-16">
          <aside
            id="sidebar"
            className="fixed  hidden z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          >
            <AdminNewsidebar />
          </aside>

          {/* --------------------------------------2nd bar-------------- */}

          <div
            id="main-content"
            className="h-full bg-gray-50 w-full relative overflow-y-auto lg:ml-64"
          >
            <span className="mx-5 my-3 font-sans font-semibold block">
              Company Overview
            </span>
            <main>
              <div className="px-6">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
                  <div className="p-4 sm:p-4 xl:p-6  2xl:col-span-2">
                    <div className="flex w-full lg:flex-nowrap flex-wrap justify-start items-center gap-4">
                      {g1data.map((val, id) => (
                        <div
                          key={id}
                          className="flex-shrink-0 w-full lg:w-[30%]  "
                        >
                          <div className="cardfirst lg:flex justify-center items-center p-2">
                            <div className="flex lg:flex-col gap-2 justify-between items-center mb-3">
                              <div className="flex flex-col justify-start  items-start gap-1">
                                <h6 className="flex items-center font-bold text-sm mb-0">
                                  {val.text}
                                </h6>
                                <span className="badges">+{val.percent}%</span>
                              </div>
                              <div>
                                <h6 className="flex items-center text-sm mb-0">
                                  <FaRupeeSign />
                                  {val.rs}
                                </h6>
                              </div>
                            </div>
                            <div className="w-full lg:w-[100px]">
                              <Image
                                src={val.img} // Assuming `val.img` directly contains the image source
                                alt={val.text} // Use a descriptive alt text
                                width={300} // Set the width
                                height={200} // Set the height
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                        2,340
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        New products this week
                      </h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                      14.6%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                        5,355
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        Visitors this week
                      </h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                      32.9%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                        385
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        User signups this week
                      </h3>
                    </div>
                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                      -2.7%
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
