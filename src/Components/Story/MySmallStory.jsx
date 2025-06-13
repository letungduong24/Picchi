import React from "react";
import { IoTimeOutline } from "react-icons/io5";

const MySmallStory = ({storyImg, time, onDelete, isError }) => {
  return (
    <div
      style={{ backgroundImage: `url(${storyImg})` }}
      className="rounded-[20px] bg-cover bg-center w-full relative aspect-[3/4] p-[20px]"
    >

    <button
      onClick={onDelete}
      className="absolute top-3 right-3 z-10 text-xs font-bold text-(--color-violet) bg-white px-2 py-1 rounded-[20px] shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200"
      style={{ cursor: "pointer" }}
    >
      Xóa tin
    </button>


      <div className="w-full h-full flex items-end z-10">
        <div className="bg-white px-[12px] py-[4px] rounded-full flex items-center gap-1 text-sm font-regular text-(--color-violet) w-fit mx-auto">
          <p>{time}</p>
            <IoTimeOutline className="text-sm" />
        </div>
      </div>
      
    </div>
  );
};

export default MySmallStory;
