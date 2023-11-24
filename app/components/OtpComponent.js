import React from 'react'

const OtpComponent = () => {
  return (
    <div className="relative flex min-h-auto flex-col justify-center overflow-hidden py-5">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-12">
          <div className="flex flex-col  items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Mobile Verification</p>
            </div>
            <div className="flex text-center flex-wrap text-sm md:font-medium text-gray-400">
              <p>Please Enter the OTP Sent to +91 98******* Change</p>
            </div>
          </div>
          <div>
            <form action="" method="post">
              <div className="flex flex-col space-y-10">
                <div className="flex flex-row items-center gap-2 justify-between mx-auto w-full">
                  {[1, 5, 3, 7, 5, 2].map((index) => (
                    <div key={index} className="w-16 h-14">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        placeholder={index}
                        name={`input-${index}`}
                        id={`input-${index}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center space-y-5">
                  <button
                    className="flex flex-row items-center justify-center text-center w-[50%] border rounded-xl outline-none py-3 border-none text-white text-sm shadow-sm"
                    style={{ backgroundColor: "#F85390" }}
                  >
                    Verify
                  </button>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <a
                      className="flex flex-row items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpComponent
