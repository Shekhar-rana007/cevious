import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import LoginSidebar from "../../components/LoginSidebar";
import LoginInput from "@/app/components/LoginInputcomp";
import ButtonComp from "@/app/components/ButtonComp";

const SignupPage = () => {
  return (
    <div className="container-fluid mx-auto ">
      <div className="main flex flex-wrap">
        <LoginSidebar />
        <div className=" w-full p-5 md:w-[73vw] md:h-auto md:flex justify-center items-center ">
          <div className="join w-full md:w-[50vw]  ">
            <div className="flex  flex-col justify-center">
              <div className=" flex justify-center items-center">
                <h1
                  className="text-3xl font-normal font-"
                  style={{
                    width: "583px",
                    fontSize: "33px",
                    lineHeight: "40px",
                    color: "#1F2937",
                    textAlign: "center",
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                  }}
                >
                  Join & Connect the Fastest Growing Online Community
                </h1>
              </div>

              <div className="flex gap-5 mt-2 mb-3">
                <div className="border cursor-pointer border-solid border-purple-300 rounded-3xl w-72 flex justify-center gap-2 items-center bg-gray-100 p-4 mt-4">
                  <FcGoogle />
                  Sign up with Google
                </div>
                <div className="border cursor-pointer border-solid border-purple-300 rounded-3xl w-72 flex justify-center gap-2 items-center bg-gray-100 p-4 mt-4">
                  <GrLinkedin color="#0076b2" /> Sign up with LinkedIn
                </div>
              </div>
              <div className="flex flex-col">
                <LoginInput route={""}/>
              </div>
              <p
                className="text-center text-base font-normal leading-normal text-gray-700 font-open-sans"
                style={{ marginTop: "20px" }}
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

export default SignupPage;

// #B697EE;
