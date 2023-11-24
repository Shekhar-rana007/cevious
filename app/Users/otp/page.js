import OtpComponent from "@/app/components/OtpComponent";
import { logo, otpimage } from "@/public/assets";

const page = () => {
  return (
    <div className="container-fluid  ">
      <div className="divider min-w-full bg-black flex flex-wrap  xl:flex-nowrap">
        <div className="w-full lg:w-[23vw] " style={{ background: "#754BD0" }}>
          <div className="flex flex-col justify-center items-center">
            <img
              src={logo.src}
              alt="Logo"
              width="200"
              height="40"
              className="absolute top-10 p-5"
            />
            <img
              src={otpimage.src}
              alt="Logo"
              width="350"
              className="relative top-60 h-auto"
            />
            <p className="mt-[262px] mb-3 text-lg text-white text-center ">
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
        <div className=" border w-full md:h-[40vh] lg:w-[75vw] lg:h-[100vh] bg-gray-50 flex justify-center items-center">
          <OtpComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
