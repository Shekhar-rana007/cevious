"use client";
import React, { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import MyChart2 from "./MyChart2";

const SecMainGraph = () => {
  useEffect(()=>{

  })
  return (
    <>
      <div className="graphcard1 p-3 shadow-2xl bg-white rounded-lg">
        <div className="flex capitalize gap-24">
          <div>
            <span className=" text-slate-500 font-semibold">Total sales</span>
          </div>
          <div className="capitalize flex gap-3 items-center text-slate-500 font-semibold">
            <span>credit note</span>
            <span>sale</span>
            <span>
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className="ms-auto  flex justify-end  gap-2 pr-5">
          <div className="flex flex-col">
            <span className="text-lg text-slate-500 font-semibold">30k</span>
            <span className="text-xs text-slate-500 font-semibold">Saves</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-500 font-semibold">10k</span>
            <span className="text-xs text-slate-500 font-semibold">credit</span>
          </div>
        </div>
        <div>
          <MyChart2 />
        </div>
      </div>
      <div className="graphcard2 p-3 shadow-2xl bg-white rounded-lg">
        <div className="flex capitalize gap-12">
          <div>
            <span className="text-base text-slate-500 font-semibold">
              Total Purchase
            </span>
          </div>
          <div className="capitalize flex gap-3 items-center text-slate-500 font-semibold">
            <span>debit note</span>
            <span>purchase</span>
            <span>
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className="ms-auto  flex justify-end  gap-10 pr-10">
          <div className="flex flex-col">
            <span className="text-lg text-slate-500 font-semibold">30k</span>
            <span className="text-xs text-slate-500 font-semibold">Saves</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-500 font-semibold">10k</span>
            <span className="text-xs text-slate-500 font-semibold">credit</span>
          </div>
        </div>
        <div>
          <MyChart2 />
        </div>
      </div>
    </>
  );
};

export default SecMainGraph;
