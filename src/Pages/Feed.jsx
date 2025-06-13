import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import SmallStory from "../Components/Story/SmallStory";
import useFeedStore from '../store/feedStore';
import { useNavigate } from "react-router-dom";


const Feed = () => {
  const {stories, setDetailStory} = useFeedStore();
  const navigate = useNavigate()
  const handleOpenStory = (story) => {
    setDetailStory(story)
    navigate('/story');
  }

  return (
    <div className="p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3">
      <div className="topbar flex justify-between items-center">
        <p className='font-bold text-2xl text-(--color-violet)'>BẢNG TIN</p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className="font-semibold text-[var(--color-violet)] text-[15px] p-0 flex items-center leading-none">
            Tất cả
          </p>
          <MdFilterListAlt className="font-semibold text-[var(--color-violet)] text-[15px] leading-none" />
        </div>
      </div>

      <div className="feed-wrapper grid-cols-5 grid gap-5 p-[30px] bg-white rounded-[20px]">
          {stories && stories.map((story) => (
            <SmallStory onClick={() => {handleOpenStory(story)}} name={story.name} avatar={story.avatar} time={story.time} storyImg={story.storyImg} />
          ))}
      </div>
    </div>
  );
};

export default Feed;
