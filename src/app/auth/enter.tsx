import Button from "@/componets/button";
import Input from "@/componets/input";
import classnames from "@/libs/utils";
import React, { useState } from "react";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    setMethod("email");
  };
  const onPhoneClick = () => {
    setMethod("phone");
  };
  return (
    <div className="mt-10 px-10">
      <h3 className="text-center font-bold text-3xl">Enter to Carrot</h3>
      <div className="mt-16">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-400">Enter Using</h5>
          <div className="grid grid-cols-2 gap-10 mt-6  w-full">
            {/* <button
              className={`pb-4 border-b-2 font-medium ${
                method === "email" ? `border-orange-500 text-orange-400` : ""
              }`}
              onClick={onEmailClick}
            >
              Email address
            </button> */}
            <button
              className={classnames(
                "pb-4 border-b-2 font-medium",
                method === "email"
                  ? "border-orange-500 text-orange-400"
                  : "border-tranparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              Email address
            </button>
            <button
              className={`pb-4 border-b-2 font-medium ${
                method === "phone"
                  ? `border-orange-500 text-orange-400`
                  : "border-tranparent text-gray-500"
              }`}
              onClick={onPhoneClick}
            >
              Phone number
            </button>
          </div>
        </div>
        {/* <form action="" className="flex flex-col mt-6">
          <label htmlFor="" className="text-sm font-medium text-gray-400 mb-2">
            {method === "email" ? "Email address" : null}
            {method === "phone" ? "Phone number" : null}
          </label>
          <div>
            {method === "email" ? (
              <input
                type="email"
                required
                className="appearance-none w-full px-3 py-2 border border-gray-400 rounded-md 
                 placeholder-gray-400 shadow-md focus:outline-none focus:ring-orange-400 focus:border-orange-400"
              />
            ) : null}
            {method === "phone" ? (
              <div className="mt-2 shadow-sm flex ">
                <span
                  className="border flex items-center justify-center px-3 rounded-l-md border-r-0
                 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm"
                >
                  +82
                </span>
                <input
                  type="number"
                  required
                  className="appearance-none w-full px-3 py-2 border border-gray-400 rounded-md 
                  rounded-l-none placeholder-gray-400 shadow-md focus:outline-none focus:ring-orange-400 focus:border-orange-400"
                />
              </div>
            ) : null}
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md 
          border border-transparent shadow-sm text-sm font-medium mt-4 focus:ring-2 focus:ring-offset-2 
          focus:ring-orange-500 focsu:outline-none"
          >
            {method === "email" ? "Get login link" : null}
            {method === "phone" ? "Get one-time password" : null}
          </button>
        </form> */}
        <form className="flex flex-col mt-8 space-y-4">
          {method === "email" ? (
            <Input name="email" label="Email address" type="email" required />
          ) : null}
          {method === "phone" ? (
            <Input
              name="phone"
              label="Phone number"
              type="number"
              kind="phone"
              required
            />
          ) : null}
          {method === "email" ? <Button text={"Get login link"} /> : null}
          {method === "phone" ? (
            <Button text={"Get one-time password"} />
          ) : null}
        </form>
        <div className="mt-8">
          <div className="">
            <div className=" w-full border-t border-gray-200" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-gray-500 text-sm">
                Or enter with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-3">
            <button
              className="flex justify-center items-center bg-white px-2 py-2 border border-gray-300 
             rounded-md shadow-sm text-sm font-medium horver:bg-gray-50"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              className="flex justify-center items-center bg-white px-2 py-2 border border-gray-300 
             rounded-md shadow-sm text-sm font-medium horver:bg-gray-50"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
