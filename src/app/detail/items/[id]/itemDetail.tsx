import HeaderLayout from "@/app/headerLayout";
import React from "react";

export default function ItemDetail() {
  return (
    <HeaderLayout canGoBack>
      <div className="px-6 py-8">
        <div className="mb-6">
          <div className="h-96 bg-slate-400 rounded-md" />
          <div className="flex items-center py-4 cursor-pointer border-b-2">
            <div className="w-12 h-12 bg-slate-400 rounded-full mr-2" />
            <div>
              <p className="text-sm text-gray-600 font-medium">Steve Jebs</p>
              <p className="text-xs font-medium text-slate-600">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-bold text-3xl text-gray-900">Galaxy S50</h1>
            <span className="text-2xl block mt-3 text-gray-900">$140</span>
            <p className="my-6 text-base text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 font-medium bg-orange-500 text-white rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 hover:bg-orange-600">
                Talk to seller
              </button>
              <button className="p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 19"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Similar items
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {[1, 1, 1, 1, 1, , 1, 1].map((_, i) => (
              <div key={i} className="space-y-0.5">
                <div className="w-full h-56 mb-2 rounded-md bg-slate-300" />
                <h3 className="text-sm text-gray-700">Galaxy 560</h3>
                <span className="text-sm font-medium text-gray-900">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
