import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Default from "../assets/default.png";
import User from "../assets/user.png";
import Story3 from "../assets/story3.jpg";
import SmallStory from "../Components/Story/SmallStory";

const storyImages = [
  { id: 1, storyImg: Story3 },
  { id: 2, storyImg: Story3 },
  { id: 3, storyImg: Story3 },
  { id: 4, storyImg: Story3 },
  { id: 5, storyImg: Story3 },
  { id: 6, storyImg: Story3 },
  { id: 7, storyImg: Story3 },
  { id: 8, storyImg: Story3 },
  { id: 9, storyImg: Story3 },
  { id: 10, storyImg: Story3},
];

const Feed = () => {
  const navigate = useNavigate();

  const handleStoryClick = (id) => {
    navigate(`/story/${id}`);
  };

  const stories = [
    { id: 1, time: "3 phút trước" },
    { id: 2, time: "8 phút trước" },
    { id: 3, time: "13 phút trước" },
    { id: 4, time: "18 phút trước" },
    { id: 5, time: "23 phút trước" },
    { id: 6, time: "28 phút trước" },
    { id: 7, time: "33 phút trước" },
    { id: 8, time: "38 phút trước" },
    { id: 9, time: "43 phút trước" },
    { id: 10, time: "48 phút trước" },
  ];

  return (
    <div className="p-[20px] bg-[var(--color-gray)] flex-1 flex flex-col gap-3">
      <div className="topbar flex justify-between items-center">
        <p className="font-bold text-[25px] text-[var(--color-violet)]">
          Bảng tin
        </p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className="font-semibold text-[var(--color-violet)] text-[15px] p-0 flex items-center leading-none">
            Tất cả
          </p>
          <MdFilterListAlt className="font-semibold text-[var(--color-violet)] text-[15px] leading-none" />
        </div>
      </div>

      <div className="feed-wrapper grid-cols-5 grid gap-5 p-[30px] bg-white rounded-[20px]">
        {stories.map((story) => {
          const storyImage = storyImages.find((img) => img.id === story.id);
          return (
            <SmallStory
              key={story.id}
              name={"DucLe"}
              avatar={User}
              time={story.time}
              storyImg={storyImage ? storyImage.storyImg : Default}
              onClick={() => handleStoryClick(story.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feed;
