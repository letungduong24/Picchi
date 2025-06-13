import React, { useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
import { IoCheckmarkCircle } from "react-icons/io5";
import Pic_giang from "../assets/pic_giang.png";
import Pic_giang1 from "../assets/pic_giang1.png";
import MySmallStory from "../Components/Story/MySmallStory";
import useSuccess from "../hooks/useSuccess";
import useConfirmStore from "../store/confirmStore";
import useStoryStore from "../store/storyStore";
import useSuccessStore from "../store/successStore";
import useErrorStore from "../store/errorStore";

const StoryManager = () => {
  const {stories, deleteStory} = useStoryStore()
  const { showConfirm } = useConfirmStore();
  const {showSuccess} = useSuccessStore();
  const {showError} = useErrorStore();

  const handleDelete = (story) => {
    showConfirm({
      title: 'Xác nhận xóa',
      content: 'Bạn có chắc muốn xóa không?',
      onConfirm: () => {
        if(story.isError){
          deleteStory(story.id); 
          useConfirmStore.getState().hideConfirm(); 
          showSuccess({
            title: 'Xóa tin',
            content: 'Xóa tin thành công',
            button: 'Đóng'
        })
        } else {
          showError({
            title: 'Xóa tin',
            content: 'Có lỗi xảy ra khi xóa tin. Vui lòng thử lại sau!',
            button: 'Đóng'
          })
        }
      },
    });
  };

  return (
    <div className="p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3">
      <div className="topbar flex justify-between items-center">
        <p className="font-bold text-2xl text-(--color-violet)">Quản lý tin</p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className="font-semibold text-(--color-violet) text-[15px] p-0 flex items-center leading-none">
            Tất cả
          </p>
          <MdFilterListAlt className="font-semibold text-(--color-violet) text-[15px] leading-none" />
        </div>
      </div>

      <div className="feed-wrapper grid grid-cols-5 gap-5 p-[30px] bg-white rounded-[20px]">
        {stories.map((story) => (
          <MySmallStory
            key={story.id}
            storyImg={story.storyImg}
            time={story.time}
            onDelete={() => handleDelete(story)}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryManager;
