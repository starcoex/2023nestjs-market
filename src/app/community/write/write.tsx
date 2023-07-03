import HeaderLayout from "@/app/headerLayout";
import Button from "@/componets/button";
import TextAreea from "@/componets/textarea";
import { NextPage } from "next";

interface Props {}

const Write: NextPage<Props> = ({}) => {
  return (
    <HeaderLayout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextAreea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </HeaderLayout>
    // <div className="px-4 py-10">
    //   <textarea
    //     name=""
    //     id=""
    //     rows={4}
    //     placeholder="Ask a question!"
    //     className="mt-1 w-full border  shadow-sm border-gray-300 focus:ring-orange-500 rounded-md focus:border-orange-500"
    //   />

    //   <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
    //     Submit
    //   </button>
    // </div>
  );
};

export default Write;
