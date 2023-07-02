import React from "react";

export default function Upload() {
  return (
    <div className="px-4 py-12 space-y-5">
      <div>
        <label
          htmlFor="file"
          className="w-full cursor-pointer flex items-center justify-center border-2 border-dashed py-4 border-gray-300 hover:border-orange-500  hover:text-orange-500 "
        >
          <svg
            className="w-6 h-6 text-gray-800 hover:text-orange-500  dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 19"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3m-5.5 0V1.07M5.5 5l4-4 4 4"
            />
          </svg>
          <input id="file" type="file" className="hidden" />
        </label>
      </div>
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </label>
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id="name"
            type="email"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      </div>
      <div></div>
      <div className="my-5">
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <div className="flex items-center relative shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 pointer-events-none">
            <span className="text-gray-500 text-sm">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="" className="mb-1 block font-medium text-gray-700">
          Desription
        </label>
        <textarea
          name=""
          id=""
          rows={4}
          className="mt-1 w-full border  shadow-sm border-gray-300 focus:ring-orange-500 rounded-md focus:border-orange-500"
        />
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Upload product
      </button>
    </div>
  );
}
