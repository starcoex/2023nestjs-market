import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="bg-yellow-500 w-full h-screen">
      <div className="grid justify-items-center grid-cols-3 gap-4 pt-20">
        <div className="bg-white max-w-xs px-4 py-6">
          <div className="text-gray-900 text-2xl font-bold">
            <span>Weather</span>
          </div>
          <div className="py-6 space-y-4">
            {/* class="flex items-center justify-between rounded-xl border-2 border-b-4 border-black px-5 py-5" */}
            <div className="w-52 h-16 bg-slate-300 rounded-2xl border-2 border-b-4 border-black shadow-md flex justify-between">
              <div className="flex flex-col  justify-center p-2">
                <span className="font-bold text-gray-700 ">Casius</span>
                <span className="text-xs block">Mars, 12AM</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                <span className="font-bold text-2xl pr-2 pl-4">85&#176;</span>
              </div>
            </div>
            <div className="w-52 h-16 bg-slate-300 rounded-2xl border-b-4  shadow-md flex justify-between ">
              <div className="flex flex-col  justify-center pl-2">
                <span className="font-bold text-gray-700 ">Casius</span>
                <span className="text-xs block">Mars, 12AM</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                <span className="font-bold text-2xl pr-2 pl-4">85&#176;</span>
              </div>
            </div>
            <div className="w-52 h-16 bg-slate-300 rounded-2xl border-b-4  shadow-md flex justify-between ">
              <div className="flex flex-col  justify-center pl-2">
                <span className="font-bold text-gray-700 ">Casius</span>
                <span className="text-xs block">Mars, 12AM</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                <span className="font-bold text-2xl pr-2 pl-4">85&#176;</span>
              </div>
            </div>
            <div className="w-52 h-16 bg-slate-300 rounded-2xl border-b-4  shadow-md flex justify-between ">
              <div className="flex flex-col  justify-center pl-2">
                <span className="font-bold text-gray-700 ">Casius</span>
                <span className="text-xs block">Mars, 12AM</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
                <span className="font-bold text-2xl pr-2 pl-4">85&#176;</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center p-4 ">
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white max-w-xs px-4 py-6">
          <div className="text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-gary-600 text-xs font-medium">
              SIMPLE TAG
            </span>
            <span className="font-extrabold text-gray-800">Work with best</span>
            <span className="font-extrabold text-gray-800 -mt-2 mb-6">
              desingers
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-yellow-600 w-24 h-24 rounded-xl flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div className="bg-red-300 w-24 h-24  rounded-xl">2</div>
            <div className="bg-yellow-600 w-24 h-24  rounded-xl">1</div>
            <div className="bg-red-300 w-24 h-24  rounded-xl">2</div>
          </div>
          <div className="flex justify-center items-center w-full h-10 bg-blue-600 rounded-lg mt-6 text-white">
            <button>Lets get it done</button>
          </div>
        </div>
        <div className="bg-blue-300 max-w-xs px-4 py-6">
          <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xl font-bold text-gray-700 pl-7">
              Friends
            </span>
          </div>
          <div className="py-4 space-y-4">
            <div className="bg-white p-2 rounded-lg flex justify-between items-center">
              <span className="text-sm text-gray-500">Search with love...</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="border rounded-lg flex items-center justify-between p-2">
              <div className="w-10 h-10 bg-slate-400 rounded-full" />
              <div className="flex flex-col pl-2 pr-6">
                <span className="text-sm font-bold">Bill Rizer</span>
                <span className="text-xs text-gray-500">Planet Desinner</span>
              </div>
              <div className="border bg-yellow-400 rounded-md p-1 flex items-center justify-center">
                <button className="text-sm text-gray-700">invite</button>
              </div>
            </div>
            <div className="border rounded-lg flex items-center justify-between p-2">
              <div className="w-10 h-10 bg-slate-400 rounded-full" />
              <div className="flex flex-col pl-2 pr-6">
                <span className="text-sm font-bold">Bill Rizer</span>
                <span className="text-xs text-gray-500">Planet Desinner</span>
              </div>
              <div className="border bg-yellow-400 rounded-md p-1 flex items-center justify-center">
                <button className="text-sm text-gray-700">invite</button>
              </div>
            </div>
            <div className="border rounded-lg flex items-center justify-between p-2">
              <div className="w-10 h-10 bg-slate-400 rounded-full" />
              <div className="flex flex-col pl-2 pr-6">
                <span className="text-sm font-bold">Bill Rizer</span>
                <span className="text-xs text-gray-500">Planet Desinner</span>
              </div>
              <div className="border bg-yellow-400 rounded-md p-1 flex items-center justify-center">
                <button className="text-sm text-gray-700">invite</button>
              </div>
            </div>
            <div className="border rounded-lg flex items-center justify-between p-2">
              <div className="w-10 h-10 bg-slate-400 rounded-full" />
              <div className="flex flex-col pl-2 pr-6">
                <span className="text-sm font-bold">Bill Rizer</span>
                <span className="text-xs text-gray-500">Planet Desinner</span>
              </div>
              <div className="border bg-yellow-400 rounded-md p-1 flex items-center justify-center">
                <button className="text-sm text-gray-700">invite</button>
              </div>
            </div>
            <div className="border rounded-lg flex items-center justify-between p-2">
              <div className="w-10 h-10 bg-slate-400 rounded-full" />
              <div className="flex flex-col pl-2 pr-6">
                <span className="text-sm font-bold">Bill Rizer</span>
                <span className="text-xs text-gray-500">Planet Desinner</span>
              </div>
              <div className="border bg-yellow-400 rounded-md p-1 flex items-center justify-center">
                <button className="text-sm text-gray-700">invite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
