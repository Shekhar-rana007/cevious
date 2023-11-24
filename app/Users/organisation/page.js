import { companyrecog } from "@/public/assets";
import "./organisation.css";
const page = () => {
  return (
    <>
      <div className="container-fluid orgcont">
        <div className="w-full p-5 md:w-[75%] relative top-28 md:left-[12vw] ">
          <div className="w-[100%] bg-white p-8 rounded-lg shadow-xl">
            <h1 className="text-4xl font-bold text-center mb-6">
              Set up your Organisation Profile
            </h1>
            <div className="space-y-6">
              <p className="text-lg font-semibold">Organizational Details</p>
              <form className="max-w-full mx-auto p-4 bg-white rounded-lg   ">
                <div className="flex flex-col gap-4 mb-4">
                  <label htmlFor="orgName" className="text-lg">
                    Organizational Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="orgName"
                    name="orgName"
                    required
                    placeholder="Enter organizational name"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="businessLocation" className="text-lg">
                      Business Location<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="businessLocation"
                      name="businessLocation"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Location</option>
                      <option value="india">India</option>
                      <option value="noida">Noida</option>
                      <option value="gjah">GJAH</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="territory" className="text-lg">
                      Select/Union Territory
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="territory"
                      name="territory"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Territory</option>
                      <option value="noida">Noida</option>
                      <option value="gjah">GJAH</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="block bg-purple-500 w-6 h-6 rounded-full text-center text-white">
                    +
                  </span>
                  <p className="text-purple-500">Add organization address</p>
                </div>

                <p className="text-lg font-semibold"> Regional Settings</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="businessLocation" className="text-lg">
                      Currency<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="businessLocation"
                      name="businessLocation"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Location</option>
                      <option value="india">India</option>
                      <option value="noida">Noida</option>
                      <option value="gjah">GJAH</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="territory" className="text-lg">
                      Languages
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="territory"
                      name="territory"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Territory</option>
                      <option value="noida">Noida</option>
                      <option value="gjah">GJAH</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="businessLocation" className="text-lg">
                      Time Zone<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="businessLocation"
                      name="businessLocation"
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Location</option>
                      <option value="india">India</option>
                      <option value="noida">Noida</option>
                      <option value="gjah">GJAH</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p>Is this business registered for GST</p>
                  <div className="flex items-center">
                    <p className="mr-2">No</p>
                    <input
                      type="checkbox"
                      id="gstSwitch"
                      className="toggle-checkbox"
                    />
                    <label htmlFor="gstSwitch" className="toggle-label"></label>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <p>
                    <span>Note:</span> You can change these details later if
                    setting is needed.
                  </p>
                </div>
                <div className="flex flex-col items-start mt-5 ">
                  <button
                    className="flex flex-row items-center justify-center text-center w-1/3 border rounded-xl outline-none py-3 border-none text-white text-sm shadow-sm"
                    style={{ backgroundColor: "#F85390" }}
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
