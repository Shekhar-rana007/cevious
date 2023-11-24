import LoginSidebar from "@/app/components/LoginSidebar";
import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import ButtonComp from "@/app/components/ButtonComp";
const page = () => {
  return (
    <div className="container-fluid mx-auto ">
      <div className="main flex flex-wrap md:h-[50vh]">
        <LoginSidebar />
        <div className=" w-full p-5 md:w-[73vw] md:h-auto md:flex md:justify-center md:items-center md:pt-16 md:pb-16">
          <div className="join w-full md:w-[50vw]  ">
            <div className="">
              <div className=" flex justify-center">
                <h1
                  className="text-3xl font-normal font-"
                  style={{
                    width: "583px",
                    fontSize: "38px",
                    lineHeight: "58px",
                    color: "#1F2937",
                    textAlign: "center",
                    // fontFamily: "Open Sans",
                    fontWeight: 700,
                  }}
                >
                  Join & Connect the Fastest Growing Online Community
                </h1>
              </div>

              <div className="flex gap-5 mt-2 mb-5">
                <div className="border border-solid border-purple-300 rounded-3xl w-72 flex justify-center gap-2 items-center bg-gray-100 p-4 mt-4">
                  <FcGoogle />
                  Sign up with Google
                </div>
                <div className="border border-solid border-purple-300 rounded-3xl w-72 flex justify-center gap-2 items-center bg-gray-100 p-4 mt-4">
                  <GrLinkedin color="#0076b2" /> Sign up with LinkedIn
                </div>
              </div>
              <div className="flex flex-col">
                <form>
                  <div className="flex flex-col mb-4">
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
                  <div className="flex justify-center ">
                    <ButtonComp text={"Login"} wid={300} />
                  </div>
                </form>
              </div>
              <p
                className="text-center text-base font-normal leading-normal text-gray-700 font-open-sans"
                style={{ marginTop: "38px" }}
              >
                Own an Account?
                <span className="font-bold text-gray-700 font-open-sans no-underline">
                  Jump right in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
