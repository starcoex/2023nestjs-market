import { NextPage } from "next";

interface Props {}

const CommunityPostDetail: NextPage<Props> = ({}) => {
  return (
    <div className="px-6 py-8">
      <span className="mb-5 inline-flex border px-2.5 py-0.5 text-xs bg-gray-100 text-gray-800 font-medium rounded-2xl ">
        동네질문
      </span>
      <div className="mb-3 flex items-center py-4 cursor-pointer border-b-2">
        <div className="w-10 h-10 bg-slate-400 rounded-full mr-2" />
        <div>
          <p className="text-sm text-gray-600 font-medium">Steve Jebs</p>
          <p className="text-xs font-medium text-slate-600">
            View profile &rarr;
          </p>
        </div>
      </div>
      <div>
        <div className="mt-2 text-gray-700">
          <span className="text-orange-500 font-medium">Q.</span>
          <span className="text-gray-700 text-base">
            What is the best mandu restaurant?
          </span>
        </div>
        <div className="px-4 space-x-5 mt-3 text-gray-700 py-2.5 flex border-t border-b-[2px] w-full">
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Question 1</span>
            <span className="space-x-2 text-sm flex items-center">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>answer 1</span>
            </span>
          </span>
        </div>
      </div>
      <div className="my-5">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-slate-200 rounded-full fixed" />
          <div className="flex flex-col px-6">
            <span className="text-sm block font-medium text-gray-700">
              Steve Jebs
            </span>
            <span className="block text-xs text-gray-700">2 시간 전</span>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            </p>
          </div>
        </div>
      </div>
      <div>
        <textarea
          name=""
          id=""
          rows={4}
          placeholder="Answer this question!"
          className="mt-1 w-full border  shadow-sm border-gray-300 focus:ring-orange-500 rounded-md focus:border-orange-500"
        />
        <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
