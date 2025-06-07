import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const SmallStory = ({ storyImg, name, time, avatar, onClick }) => {
  return (
    <div
      onClick={onClick} 
      style={{ backgroundImage: `url(${storyImg})` }}

      className="rounded-[20px] bg-cover bg-center w-full relative aspect-[3/4] p-[20px] "
    >
      <div className="cursor-pointer w-full h-full flex items-end z-10 justify-center">
        <div className="bg-white w-fit rounded-[60px] h-[20%] p-[10px] flex items-center justify-between">
          <div className="flex gap-1 h-full items-center">
            <img src={avatar} className="h-full rounded-full" alt={name} />
            <div className="flex flex-col gap-0">

              <p className="text-sm leading-none font-bold text-(--color-violet)">
                {name}
              </p>
              <p className="text-sm leading-none flex items-center gap-0.5 text-(--color-violet)">
                {time} <IoTimeOutline />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallStory;
