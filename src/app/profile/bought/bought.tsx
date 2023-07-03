import { NextPage } from "next";
import HeaderLayout from "../../headerLayout";
import Item from "@/componets/item";

interface Props {}

const Bought: NextPage<Props> = ({}) => {
  return (
    <HeaderLayout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
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

export default Bought;
