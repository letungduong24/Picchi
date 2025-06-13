import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const StoryDetail = () => {
  const navigate = useNavigate();
  const [visibleState, setVisibleState] = useState("bar");
  const { detailStory } = useFeedStore();
  const {showError, hideError} = useErrorStore();
  const [like, setLike] = useState(false)
  const { showSuccess, hideSuccess } = useSuccessStore();
  const handleSetType = (type) => {
    setVisibleState(type);
  };

  const handleLike = () => {
    setLike(!like);
    showSuccess({
      title: "Thích tin",
      content: "Thích tin thành công",
      button: "Đóng",
    });
  };

  useEffect(() => {
    if(!detailStory){
      showError({
            title: 'Xem tin',
            content: 'Tin không tồn tại!',
            button: 'Đóng',
        })
      navigate('/')
    }
  }, [detailStory])

  return (
    <div className=" bg-(--color-gray) flex-1 flex flex-col gap-3">
      <div className="bg-(--color-gray) min-h-[500px] flex-1 p-[30px] rounded-[15px] flex justify-center items-center gap-0">
        {/* Story */}
        <div
          className="flex flex-col items-start justify-between gap-[10px] p-4 w-full max-w-[450px] aspect-[3/4] rounded-[20px] shadow-md border border-gray-200 bg-cover bg-center text-white"
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
                      <button
                        className="text-red-500 hover:text-red-600 text-3xl cursor-pointer"
                        // onClick={() => setLike(!like)}
                        onClick={handleLike}
                      >
                        {like ? <FaHeart /> : <FaRegHeart />}
                      </button>
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

                {/* Action buttons */}
              </div>
            ) : (
              <ChatStory handleClose={() => handleSetType("bar")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;
