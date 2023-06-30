import { NextPage } from "next";

interface Props {}

const CommunityPostDetail: NextPage<Props> = ({}) => {
  return (
    <div>
      <div>
        <div>
          <div />
          <h1>Steve Jebs</h1>
          <span>2 시간 전</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eius
            reprehenderit blanditiis maiores vel ut consectetur ullam molestias
            beatae adipisci consequuntur iste mollitia iure delectus rem.
          </p>
        </div>
      </div>
      <div>
        <textarea name="" id="" rows={10}></textarea>
        <button>Reply</button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
