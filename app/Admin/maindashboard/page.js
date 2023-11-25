"use client";
import React from "react";
import Image from "next/image";
import AdminTop from "@/app/components/AdminTop";
import "./asidebar.css";
import AdminNewsidebar from "@/app/components/AdminNewsidebar";
// import MyChart from "@/app/components/MyChart";
import { FaRupeeSign } from "react-icons/fa";
import { graph1, graph2, graph3, graph4 } from "@/public/assets";
import { BsThreeDots } from "react-icons/bs";
import SecMainGraph from "@/app/components/SecMainGraph";
import CircleChart from "@/app/components/CircleChart";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
const page = () => {
  const g1data = [
    { text: "sales", percent: "2.4", rs: "12,5622.26", img: graph1 },
    { text: "credit Notes", percent: "2.4", rs: "12,5622.26", img: graph2 },
    { text: "receivable", percent: "2.4", rs: "12,5622.26", img: graph3 },
    { text: "collection", percent: "2.4", rs: "12,5622.26", img: graph4 },
    { text: "overdue", percent: "2.4", rs: "12,5622.26", img: graph3 },
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
              {/* ----------------------first------------------ */}
              <div className="px-6 ">
                <div className="w-full bg-white shadow-md text-slate-500 rounded-xl grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2">
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

              {/* -------------------------------sec------------------------------ */}
              <div className=" secMain flex justify-between p-5 flex-wrap gap-3">
                <SecMainGraph />
              </div>
              {/* ------------------------third------------------------------ */}
              <div className=" thirdMain flex justify-between p-5 flex-wrap gap-3">
                {/* ------------------------------firstpart--------------- */}
                <div className="graphcard3 p-2 shadow-2xl bg-white rounded-lg ">
                  <div className="flex capitalize justify-between">
                    <div>
                      <span className=" text-slate-500  font-semibold">
                        receivable amount
                      </span>
                    </div>
                    <div className="capitalize flex items-center text-slate-500 font-semibold">
                      <span>
                        <BsThreeDots />
                      </span>
                    </div>
                  </div>
                  <div className="  flex justify-between  items-center ">
                    <div className="flex flex-col gap-20 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs capitalize text-slate-500 font-semibold">
                          receivable amount
                        </span>
                        <span className="text-xl text-slate-500 font-semibold">
                          $20,456
                        </span>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <span className="text-xs flex justify-between items-center capitalize text-slate-500 font-semibold">
                          receivable by sales
                          <span className="flex gap-1 items-center">
                            <FaLongArrowAltUp /> 80%
                          </span>
                        </span>
                        <span className="text-xs flex gap-1 items-center capitalize text-slate-500 font-semibold">
                          collection by receivable
                          <FaLongArrowAltUp /> 25%
                        </span>
                        <span className="text-xs flex justify-between items-center capitalize text-slate-500 font-semibold">
                          receivable by sales
                          <span className="flex gap-1 items-center">
                            <FaArrowDown />
                            20%
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" lg:w-[220px] text-center">
                      <CircleChart />
                    </div>
                  </div>
                </div>

                {/* --------------2ndpart-------------- */}
                <div className="graphcard3 p-2 shadow-2xl bg-white rounded-lg ">
                  <div className="flex capitalize justify-between">
                    <div>
                      <span className=" text-slate-500 font-semibold">
                        outstanding
                      </span>
                    </div>
                    <div className="capitalize flex items-center text-slate-500 font-semibold">
                      <span>
                        <BsThreeDots />
                      </span>
                    </div>
                  </div>
                  <div className="  flex justify-between  items-center ">
                    <div className="flex flex-col gap-20 py-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs capitalize text-slate-500 font-semibold">
                          receivable amount
                        </span>
                        <span className="text-xl text-slate-500 font-semibold">
                          $20,456
                        </span>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <span className="text-xs flex justify-between items-center capitalize text-slate-500 font-semibold">
                          receivable by sales
                          <span className="flex gap-1 items-center">
                            <FaLongArrowAltUp /> 80%
                          </span>
                        </span>
                        <span className="text-xs flex gap-1 items-center capitalize text-slate-500 font-semibold">
                          collection by receivable
                          <FaLongArrowAltUp /> 25%
                        </span>
                        <span className="text-xs flex justify-between items-center capitalize text-slate-500 font-semibold">
                          receivable by sales
                          <span className="flex gap-1 items-center">
                            <FaArrowDown />
                            20%
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className=" lg:w-[220px] text-center">
                      <CircleChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" forthMain flex p-5 flex-wrap gap-3">
                <div className="graphcard3 p-3 shadow-2xl bg-white rounded-lg">
                  <div className="ms-auto  flex justify-between gap-5 ">
                    <div className="flex flex-col gap-16">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs capitalize text-slate-500 font-semibold">
                          Avg.Sale per day
                        </span>
                        <span className="text-sm text-slate-500 font-semibold">
                          $9,690
                        </span>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <Image
                          src={graph1}
                          width={300}
                          height={200}
                          alt="graph"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="graphcard4 p-3 w-full lg:w-auto shadow-2xl bg-white rounded-lg">
                  <div className="flex justify-between gap-5 ">
                    <div className="flex flex-col gap-16">
                      <div className="flex justify-between gap-1 text-slate-500 ">
                        <span className="text-xs capitalize font-semibold">
                          Avg.Purchase per day
                        </span>
                        <BsThreeDots />
                      </div>
                      <div>
                        <CircleChart />
                        <div className=" flex justify-between items-center capitalize">
                          <form>
                            <input
                              type="radio"
                              id="purchase"
                              name="chartType"
                              value="purchase"
                            />
                            <label
                              htmlFor="purchase"
                              className="text-xs capitalize ml-1 text-slate-500 font-semibold"
                            >
                              Purchase
                            </label>
                          </form>
                          <form>
                            <input
                              type="radio"
                              id="debit"
                              name="chartType"
                              value="debit"
                            />
                            <label
                              htmlFor="debit"
                              className="text-xs capitalize ml-1 text-slate-500 font-semibold"
                            >
                              Debit
                            </label>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          {/* --------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default page;
