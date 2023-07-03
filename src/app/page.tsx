import React from "react";
import Item from "@/componets/item";
import FloatingButton from "@/componets/floating-button";
import HeaderLayout from "./headerLayout";
export default function Home() {
  return (
    <HeaderLayout title="Home" hasTabBar>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
          //   className="flex justify-between border-b pb-4 cursor-pointer "
          // >
          //   <div className="flex space-x-4">
          //     <div className="w-20 h-20 bg-gray-400 rounded-md" />
          //     <div className="pt-2 flex flex-col space-y-1">
          //       <h3 className="text-sm font-medium text-gray-900">
          //         New iPhone 18
          //       </h3>
          //       <span className="text-xs text-gray-600">Black</span>
          //       <span className="font-medium text-sm text-gray-900">@125</span>
          //     </div>
          //   </div>
          //   <div className="flex items-end justify-end space-x-2">
          //     <div className="flex items-center text-gray-900 space-x-1">
          //       <svg
          //         className="w-6 h-6 text-gray-800 dark:text-white"
          //         aria-hidden="true"
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 21 19"
          //       >
          //         <path
          //           stroke="currentColor"
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           strokeWidth="2"
          //           d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
          //         />
          //       </svg>
          //       <span>1</span>
          //     </div>
          //     <div className="flex items-center text-gray-900 space-x-1">
          //       <svg
          //         className="w-6 h-6 text-gray-800 dark:text-white"
          //         aria-hidden="true"
          //         xmlns="http://www.w3.org/2000/svg"
          //         fill="none"
          //         viewBox="0 0 20 18"
          //       >
          //         <path
          //           stroke="currentColor"
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           strokeWidth="2"
          //           d="M5.5 6.5h.01m4.49 0h.01m4.49 0h.01M18 1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
          //         />
          //       </svg>
          //       <span>1</span>
          //     </div>
          //   </div>
        ))}
        {/* <button className="w-10 h-10 flex items-center justify-center border bg-orange-400 shadow-sm rounded-full p-2 fixed bottom-20 right-5 hover:bg-orange-500 transition-colors cursor-pointer">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button> */}
        <FloatingButton href="items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </HeaderLayout>
  );
}
