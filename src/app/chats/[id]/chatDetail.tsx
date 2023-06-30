import { NextPage } from "next";

interface Props {}

const ChatDetail: NextPage<Props> = ({}) => {
  return (
    <div className="px-4 py-16 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm p-2 text-gray-700 border border-gray-300 rounded-md">
          <p>Hi how much are you selling them for dasfasfasf</p>
        </div>
      </div>
      <div className="flex flex-row-reverse  items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm p-2 text-gray-700 border border-gray-300 rounded-md">
          I Want $20,000
        </div>
      </div>
      <div className="flex items-start space-x-2 bottom-0 inset-x-0">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm p-2 text-gray-700 border border-gray-300 rounded-md">
          미쳣어
        </div>
      </div>
      <div className="flex py-2 bg-white ">
        <div className="flex relative  max-w-md w-full items-center mx-auto">
          <input
            type="text"
            className="shadow-sm rounded-full w-full  border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
          />
          <div className="absolute right-0 flex py-1.5 pr-1.5 inset-y-0">
            <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
