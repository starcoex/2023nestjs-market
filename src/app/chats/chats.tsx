import { NextPage } from "next";
import HeaderLayout from "../headerLayout";
import Link from "next/link";

interface Props {}

const Chats: NextPage<Props> = ({}) => {
  return (
    <HeaderLayout hasTabBar title="채팅">
      <div className="py-10 divide-y-2">
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <Link href={`/chats/${i}`} key={i}>
            <div className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              <div className="w-10 p-10 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm text-gray-500">
                  See you tomorrow in the corner at 2px!
                </p>
              </div>
            </div>
          </Link>
          // <div
          //   key={i}
          //   className="flex items-center space-x-3 px-4 py-3 cursor-pointer"
          // >
          //   <div className="w-12 h-12 bg-slate-300 rounded-full" />
          //   <div>
          //     <p className="text-gray-700">Steve jebs</p>
          //     <p className="text-sm text-gray-500">
          //       See you tomorrow in couner at 2pm!
          //     </p>
          //   </div>
          // </div>
        ))}
      </div>
    </HeaderLayout>
  );
};

export default Chats;
