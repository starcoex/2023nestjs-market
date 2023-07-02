import { NextPage } from "next";
import HeaderLayout from "../headerLayout";

interface Props {}

const Chats: NextPage<Props> = ({}) => {
  return (
    <HeaderLayout hasTabBar title="채팅">
      <div className="py-10 divide-y-2">
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-3 px-4 py-3 cursor-pointer"
          >
            <div className="w-12 h-12 bg-slate-300 rounded-full" />
            <div>
              <p className="text-gray-700">Steve jebs</p>
              <p className="text-sm text-gray-500">
                See you tomorrow in couner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </HeaderLayout>
  );
};

export default Chats;
