import { NextPage } from "next";
import Stream from "./stream";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
      <Stream />
    </>
  );
};

export default Page;
