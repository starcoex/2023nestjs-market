import HeaderLayout from "@/app/headerLayout";
import Item from "@/componets/item";
import { NextPage } from "next";

interface Props {}

const Sold: NextPage<Props> = ({}) => {
  return (
    <HeaderLayout canGoBack title="판매내역">
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </HeaderLayout>
  );
};

export default Sold;
