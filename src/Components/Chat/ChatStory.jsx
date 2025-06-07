import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const ChatStory = ({
  chatInput,
  setChatInput,
  handleChatSubmit,
  toggleChatForm,
}) => {
  return (
    <div className=" w-full">
      <div className="flex items-end">
        <button
          type="button"
          onClick={toggleChatForm}
          className="text-white ml-auto mb-2 text-4xl hover:text-gray-50/80"
        >
          <MdCancel />
        </button>
      </div>

      <form
        onSubmit={handleChatSubmit}
        style={{ backgroundColor: "rgba(243, 244, 253, 0.8)" }}
        className="rounded-[20px] px-2 py-2 flex"
      >
        <div className="flex justify-between w-full px-2 py-2">
          <div className="flex justify-center px-6 w-[90%] bg-white rounded-[20px]">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Hôm nay bạn thế nào?"
              className="bg-transparent outline-none w-full text-black placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-5 w-[10%]">
            <button
              type="submit"
              className="text-black-600 hover:text-gray-800 text-4xl"
            >
              <BsFillSendFill />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatStory;
