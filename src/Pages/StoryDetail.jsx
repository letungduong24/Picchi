import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Default from "../assets/default.png";
import { FaRegHeart } from "react-icons/fa";
import { PiChatCircleDots } from "react-icons/pi";
import { MdCancel } from "react-icons/md";
import ChatStory from "../Components/Chat/ChatStory";
import InforStory from "../Components/Story/InfoStory";
import useFeedStore from "../store/feedStore";
import useErrorStore from "../store/errorStore";
import useSuccessStore from "../store/successStore";
import { FaHeart } from "react-icons/fa";
import { PiArrowCircleLeftThin } from "react-icons/pi";
import { PiArrowCircleRightThin } from "react-icons/pi";

const StoryDetail = () => {
  const navigate = useNavigate();
  const [visibleState, setVisibleState] = useState("bar");
  const { detailStory, stories = [], setDetailStory } = useFeedStore();
  const { showError } = useErrorStore();
  const [like, setLike] = useState(false);
  const { showSuccess } = useSuccessStore();

  // Tìm index hiện tại dựa trên detailStory
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (detailStory && stories.length > 0) {
      const index = stories.findIndex((story) => story.id === detailStory.id);
      return index >= 0 ? index : 0;
    }
    return 0;
  });

  const handleSetType = (type) => {
    setVisibleState(type);
  };

  useEffect(() => {
    if (detailStory && detailStory.isError) {
      showError({
        title: "Lỗi tin",
        content: "Tin không tồn tại!",
        button: "Đóng",
        onClose: () => navigate("/"),
      });
    } else if (!detailStory) {
      showError({
        title: "Lỗi tin",
        content: "Tin không tồn tại!",
        button: "Đóng",
        onClose: () => navigate("/"),
      });
    }
  }, [detailStory]);

  const handleLike = () => {
    if (detailStory?.likeOrChatError) {
      showError({
        title: "Lỗi tin",
        content: "Tin không tồn tại!",
        button: "Đóng",
        onClose: () => navigate("/"),
      });
      return;
    }

    setLike(true);
    // showSuccess({
    //   title: "Thích tin",
    //   content: "Thích tin thành công",
    //   button: "Đóng",
    // });
  };

  const handleUnlike = () => {
    if (detailStory?.likeOrChatError) {
      showError({
        title: "Lỗi tin",
        content: "Tin không tồn tại!",
        button: "Đóng",
        onClose: () => navigate("/"),
      });
      return;
    }

    setLike(false);
  };

  // Nut chuyen trang
  const nextStory = () => {
    if (stories.length === 0) return;
    const nextIndex = currentIndex + 1;
    const newIndex = nextIndex >= stories.length ? 0 : nextIndex;
    setCurrentIndex(newIndex);
    setDetailStory(stories[newIndex]);
    setLike(false);
    setVisibleState("bar");
  };

  const prevStory = () => {
    if (stories.length === 0) return;
    const prevIndex = currentIndex - 1;
    const newIndex = prevIndex < 0 ? stories.length - 1 : prevIndex;
    setCurrentIndex(newIndex);
    setDetailStory(stories[newIndex]);
    setLike(false);
    setVisibleState("bar");
  };

  return (
    <div className=" bg-(--color-gray) flex-1 flex flex-col gap-3 p-[20px]">
      <div className="bg-white min-h-[500px] flex-1 p-[30px] rounded-[25px] flex justify-center items-center gap-4">
        {/* left */}
        <button
          className=" text-5xl bg-white/80 rounded-full p-2 cursor-pointer"
          onClick={prevStory}
        >
          <PiArrowCircleLeftThin />
        </button>

        {/* Story */}
        <div
          className="flex flex-col items-start justify-between gap-[10px] p-4 h-full aspect-[3/4]  rounded-[20px] shadow-md border border-gray-200 bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(${
              detailStory ? detailStory.storyImg : Default
            })`,
          }}
        >
          {/* Info */}
          {detailStory && (
            <div className="relative w-full flex">
              <button
                className="cursor-pointer absolute top-0 right-0 text-white hover:text-gray-50/80 text-4xl"
                onClick={() => navigate("/")}
              >
                <MdCancel />
              </button>
              {/* Story info */}
              <InforStory
                name={detailStory?.name}
                time={detailStory?.time}
                avatar={detailStory?.avatar}
              />
            </div>
          )}

          {/* Content and Actions */}
          <div className="w-full text-base font-semibold text-black text-center flex">
            {visibleState === "bar" ? (
              <div className="flex w-full items-center justify-between gap-2">
                {/* Story Content */}
                {detailStory && (
                  <div className="bg-white w-full flex justify-center rounded-[20px] px-2 py-4 h-fit ">
                    <span className="self-center">{detailStory?.content}</span>
                  </div>
                )}
                {detailStory ? (
                  <>
                    <div className="bg-white h-full aspect-square flex justify-center items-center rounded-[20px]">
                      {!like ? (
                        <button
                        className="text-red-500 hover:text-red-600 text-3xl cursor-pointer"
                        onClick={handleLike}
                      >
                        <FaRegHeart />
                      </button>
                      ) : (
                        <button
                        className="text-red-500 hover:text-red-600 text-3xl cursor-pointer"
                        onClick={handleUnlike}
                      >
                        <FaHeart />
                      </button>
                      )}
                    </div>
                    <div className="bg-white h-full aspect-square flex justify-center items-center rounded-[20px]">
                      <button
                        className="text-black-500 hover:text-black-600 text-3xl cursor-pointer"
                        onClick={() => {
                          handleSetType("chat");
                        }}
                      >
                        <PiChatCircleDots />
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <ChatStory
                handleClose={() => handleSetType("bar")}
                detailStory={detailStory}
              />
            )}
          </div>
        </div>

        {/*Right */}
        <button
          className="text-5xl bg-white/80 rounded-full p-2 cursor-pointer"
          onClick={nextStory}
        >
          <PiArrowCircleRightThin />
        </button>
      </div>
    </div>
  );
};

export default StoryDetail;
