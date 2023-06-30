import { NextPage } from "next";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      {/* <div className="flex h-screen w-full items-center justify-center bg-orange-500 bg-opacity-90">
        <div className="w-full max-w-sm rounded-xl bg-gray-50 px-5 py-5">
          <div className="mb-5 border-b-2 border-gray-300 pb-2">
            <span className="text-xs">March 2022 &darr;</span>
          </div>
          <div className="mb-10 flex flex-col items-center text-sm font-medium">
            <span>Hello, Bruno!</span>
            <span>Your medicines for today</span>
          </div>
          <div className="mb-20 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium">16</span>
              <span className="text-xs">Mon</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium">17</span>
              <span className="text-xs">Tue</span>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-blue-400 p-2 text-black">
              <span className="text-lg font-medium">18</span>
              <span className="text-xs">Wed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium">19</span>
              <span className="text-xs">Thu</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium">20</span>
              <span className="text-xs">Fri</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium">21</span>
              <span className="text-xs">Sat</span>
            </div>
          </div>
          <div>
            <div className="relative flex mb-2">
              <div className="z-10 w-[90%] rounded-lg bg-amber-200 p-3">
                <div className="flex flex-col font-medium">
                  <span>Nora - BE</span>
                  <span className="text-xs">Norenthindone - 0.35mg</span>
                </div>
                <span className="mt-24 block text-xs font-medium">7h30AM</span>
              </div>
              <div className="absolute right-0 flex h-full w-[12%] rounded-tr-lg rounded-br-lg bg-blue-400 justify-end pr-2">
                <svg
                  fill="none"
                  className="w-5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="relative flex">
              <div className="z-10 w-full rounded-lg bg-emerald-300 p-3">
                <div className="flex flex-col font-medium">
                  <span>Feosol</span>
                  <span className="text-xs">Ferrous Sulfate - 600mg</span>
                </div>
                <span className="mt-24 block text-xs font-medium">7h30AM</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-yellow-600 ">
        <div className="m-auto max-w-xs rounded-3xl bg-white p-6 ">
          <div className="flex">
            <span className="font-semibold">March 2021</span>
            <svg
              className="h-6 w-6 pl-2 text-gray-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          </div>
          <div className="pt-4 mt-2 border-t-2 border-solid"></div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-slate-600">Hello, Bruno!</span>
            <span className="font-semibold text-slate-600">
              Your medicines for today
            </span>
          </div>
          <div className="flex justify-around py-5">
            <div className="flex flex-col">
              <span>16</span>
              <span>Mon</span>
            </div>
            <div className="flex flex-col">
              <span>17</span>
              <span>Tue</span>
            </div>
            <div className="flex flex-col items-center justify-end bg-blue-400 rounded-xl w-10 h-18 pb-4">
              <span>18</span>
              <span className="text-xs">Wed</span>
            </div>
            <div className="flex flex-col">
              <span>19</span>
              <span>Thu</span>
            </div>
            <div className="flex flex-col">
              <span>20</span>
              <span>Fri</span>
            </div>
            <div className="flex flex-col">
              <span>21</span>
              <span>Sat</span>
            </div>
          </div>
          <div className="z-10 flex h-52 w-[90%] flex-col justify-between rounded-2xl bg-yellow-300 p-3">
            <div className="z-10 flex flex-col">
              <span>Nora - BE</span>
              <span>Notrenthindrone - 0.35mg</span>
            </div>
            <div>
              <span>7h30AM</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 right-0 flex h-52 w-[15%] items-center justify-end rounded-tr-lg rounded-br-lg bg-blue-400">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-2 flex h-40 flex-col rounded-2xl bg-green-400 p-3">
            <span>FeoSol</span>
            <span>Ferrous Sulfate - 600mg</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
