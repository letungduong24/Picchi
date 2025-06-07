import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Default from "../assets/default.png";
import User from "../assets/user.png";
import Story3 from "../assets/story3.jpg";
import SmallStory from "../Components/Story/SmallStory";
import Default from '../assets/default.png'
import User from '../assets/user.png'
import SmallStory from '../Components/Story/SmallStory';
import useFeedStore from '../store/feedStore';

const Feed = () => {
  const {stories} = useFeedStore();
  return (
    <div className="p-[20px] bg-[var(--color-gray)] flex-1 flex flex-col gap-3">
      <div className="topbar flex justify-between items-center">
        <p className='font-bold text-2xl text-(--color-violet)'>Bảng tin</p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className="font-semibold text-[var(--color-violet)] text-[15px] p-0 flex items-center leading-none">
            Tất cả
          </p>
          <MdFilterListAlt className="font-semibold text-[var(--color-violet)] text-[15px] leading-none" />
        </div>
      </div>

      <div className="feed-wrapper grid-cols-5 grid gap-5 p-[30px] bg-white rounded-[20px]">
          {stories && stories.map((story) => (
            <SmallStory name={story.name} avatar={story.avatar} time={story.time} storyImg={story.storyImg} />
          ))}
      </div>
    </div>
  );
};

export default Feed;
