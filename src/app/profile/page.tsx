import { NextPage } from "next";
import Profile from "./profile";
import Bought from "./bought/bought";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Profile />
    </>
  );
};

export default Page;
