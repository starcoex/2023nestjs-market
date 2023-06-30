import { NextPage } from "next";
import Chats from "./chats";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Chats />
    </>
  );
};

export default Page;
