import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <main className="bg-slate-400 py-20 px-10 max-w-sm flex flex-col space-y-8 shadow-xl m-auto">
      <div className="bg-white rounded-3xl px-6">
        <div className="flex justify-between py-6">
          <div>
            <svg
              className="w-6 h-6 text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
          </div>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-yellow-400  dark:text-white pl-3 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="text-sm font-medium mr-6">4.9</span>
            <svg
              className="w-6 h-6 text-red-600 dark:text-white pl-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg>
          </div>
        </div>
        <div>
          <img src="3.png" alt="" className="bg-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-lg pt-2">Swoon Lounge</span>
          <span className="text-xs text-slate-400 -mt-1">Chair</span>
        </div>
        <div className="flex justify-between">
          <div className="space-x-2 space-y-2">
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" />
            <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:transition" />
            <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
          </div>

          <div className="flex justify-around w-32">
            <svg
              className="w-6 h-6 text-gray-600 dark:text-white bg-gray-200 rounded-lg pl-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 28 2"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
            <span>1</span>
            <svg
              className="w-6 h-6 text-gray-600 dark:text-white bg-gray-200 rounded-lg pl-1.5 pt-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 26 26"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between py-5 font-medium text-lg">
          <span>$450</span>
          <div className="bg-blue-400 px-6  rounded-md ">
            <button className="text-sm text-white">Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
