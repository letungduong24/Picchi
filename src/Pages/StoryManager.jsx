import React, { useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
import { IoCheckmarkCircle } from "react-icons/io5"; 
import Pic_giang from "../assets/pic_giang.png";
import Pic_giang1 from "../assets/pic_giang1.png";
import SmallStory_giang from "../Components/Story/SmallStory_giang";

const StoryManager = () => {
  const [stories, setStories] = useState([
    { id: 1, time: "3 phút trước", storyImg: Pic_giang1 },
    { id: 2, time: "4 tiếng trước", storyImg: Pic_giang },
    { id: 3, time: "18 tiếng trước", storyImg: Pic_giang1 },
    { id: 4, time: "1 ngày trước", storyImg: Pic_giang1 },
    { id: 5, time: "1 ngày trước", storyImg: Pic_giang1 },
    { id: 6, time: "3 ngày trước", storyImg: Pic_giang1 },
    { id: 7, time: "4 ngày trước", storyImg: Pic_giang1 },
    { id: 8, time: "4 ngày trước", storyImg: Pic_giang1 },
    { id: 9, time: "5 ngày trước", storyImg: Pic_giang1 },
    { id: 10, time: "6 ngày trước", storyImg: Pic_giang1 },
  ]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showError, setShowError] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOpenConfirm = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  const handleConfirmDelete = () => {
    // Giả lập lỗi ngẫu nhiên (ví dụ: nếu deleteId chia hết cho 3 thì lỗi)
    const isSimulatedError = deleteId % 4 === 0;
    if (isSimulatedError) {
      setShowConfirm(false);
      setShowError(true);
      return;
    }

    setStories((prev) => prev.filter((story) => story.id !== deleteId));
    setShowConfirm(false);
    setDeleteId(null);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="p-[20px] bg-gray-200 flex-1 flex flex-col gap-3">
      <div className="topbar flex justify-between items-center">
        <p className="font-bold text-[25px] text-[--color-violet]">Quản lý tin</p>
        <div className="filter bg-white px-[21px] py-[10px] flex gap-[10px] rounded-[20px] items-center">
          <p className="font-semibold text-[--color-violet] text-[15px] p-0 flex items-center leading-none">
            Tất cả
          </p>
          <MdFilterListAlt className="font-semibold text-[--color-violet] text-[15px] leading-none" />
        </div>
      </div>

      <div className="feed-wrapper grid grid-cols-5 gap-5 p-[30px] bg-white rounded-[20px]">
        {stories.map((story) => (
          <SmallStory_giang
            key={story.id}
            storyImg={story.storyImg}
            time={story.time}
            onDelete={() => handleOpenConfirm(story.id)}
          />
        ))}
      </div>

      {/* Popup xác nhận xóa */}
      {showConfirm && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={handleCancel}
        >
          <div
            className="bg-white rounded-[20px] p-4 relative w-[460px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-2">
                <h3 className="text-[20px] font-bold">Xóa tin</h3>
                  <button
                    onClick={handleCancel}
                    className="text-[20px] text-gray-400 hover:text-gray-600 cursor-pointer"
                    style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    ×
                  </button>
              </div>

              {/* vạch ngăn cách */}
              <hr className="border-t border-black w-full" />

              <div className="flex items-center gap-3 mb-4 mt-4">
                <div className="w-10 h-0 rounded-full flex items-center justify-center border-2 border-white">
                  <PiWarningCircleBold className="text-black text-4xl" />
                </div>
                <p className="text-[20px] font-medium">
                  Bạn có chắc chắn muốn xóa tin này không ? 
                </p>
              </div>

              <div className="flex gap-2 w-full justify-end">
                <button
                  onClick={handleConfirmDelete}
                  className="bg-[#1A0B47] text-white py-1 px-4 rounded-[20px] hover:bg-opacity-90 transition-colors text-[20px] font-medium cursor-pointer w-fit"
                >
                    Xóa
                </button>

                <button
                  onClick={handleCancel}
                  className="text-[--color-violet] px-4 py-1 rounded-[20px] text-[20px] font-medium border border-[--color-violet] hover:bg-gray-100 transition cursor-pointer w-fit"
                  style={{ backgroundColor: "white" }}>
                    Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lỗi khi xóa */}
      {showError && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            onClick={() => setShowError(false)}
          >
          <div
            className="bg-white rounded-[20px] p-4 relative w-[460px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
          <div className="flex items-center justify-between w-full mb-2">
                <h3 className="text-[20px] font-bold">Xóa tin</h3>
                  <button
                    onClick={() => setShowError(false)}
                    className="text-[20px] text-gray-400 hover:text-gray-600 cursor-pointer"
                    style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    ×
                  </button>
              </div>

            {/* vạch ngăn cách */}
            <hr className="border-t border-black w-full" />

            <div className="flex items-center gap-3 mb-4 mt-4">
            <div className="w-10 h-10 rounded-full bg-[red] flex items-center justify-center border-2 border-white">
                <PiWarningCircleBold className="text-white text-5xl" />
            </div>
              <p className="text-[20px] font-medium">
                Có lỗi xảy ra khi xóa tin. Vui lòng thử lại sau!
              </p>
            </div>

            <div className="w-full flex justify-end">
              <button
              onClick={() => setShowError(false)}
              className="text-[--color-violet] px-4 py-1 rounded-[20px] text-[20px] font-medium border border-[--color-violet] hover:bg-gray-100 transition cursor-pointer"
              style={{ backgroundColor: "white" }}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup xác nhận xóa thành công */}
      {showSuccess && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={handleCloseSuccess}
        >
          <div 
          className="bg-white rounded-[20px] p-4 relative w-[320px] shadow-lg"
          >
            <div className="flex items-center justify-between w-full mb-2">
              <h3 className="text-[20px] font-bold">Xóa tin</h3>
              <button
                onClick={handleCloseSuccess}
                className="text-[20px] text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* vạch ngăn cách */}
            <hr className="border-t border-black w-full" /> 

            <div className="flex items-center gap-3 mb-4 mt-4">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center border-2 border-white">
                <IoCheckmarkCircle className="text-white text-4xl" />
              </div>
              <p className="text-[20px] font-medium">Xóa tin thành công</p>
            </div>

            <div className="w-full flex justify-end">
              <button
                  onClick={handleCloseSuccess}
                  className="text-[--color-violet] px-4 py-1 rounded-[20px] text-[20px] font-medium border border-[--color-violet] hover:bg-gray-100 transition cursor-pointer"
                  style={{ backgroundColor: "white" }}>
                    Đóng
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryManager;