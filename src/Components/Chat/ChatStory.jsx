import React, { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import useSuccessStore from "../../store/successStore";

const ChatStory = ({
  handleClose,
}) => {

  const {showSuccess} = useSuccessStore();

  const [formData, setFormData] = useState('')

  const handleChatSubmit = (e) => {{
    e.preventDefault();
    showSuccess({
      title: 'Bình luận',
      content: 'Bình luận thành công',
      button: 'Đóng'
    })
    setFormData('')
  }}

  return (
    <div className=" w-full">
      <div className="flex items-end">
        <button
          type="button"
          onClick={handleClose}
          className="text-white ml-auto mb-2 text-4xl hover:text-gray-50/80 cursor-pointer"
        >
          <MdCancel />
        </button>
      </div>

      <form
        onSubmit={handleChatSubmit}
        style={{ backgroundColor: "rgba(243, 244, 253, 0.8)" }}
        className="rounded-[20px] flex p-1"
      >
        <div className="flex gap-3 w-full px-2 py-2">
          <div className="flex justify-center px-3 w-[90%] flex-1 bg-white h-fit rounded-[20px]">
            <input
              type="text"
              placeholder="Nhập bình luận"
              className="bg-transparent outline-none w-full px-3 py-3 text-black placeholder-gray-500"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center">
            <button
              type="submit"
              className="text-black-600 hover:text-gray-800 text-3xl cursor-pointer"
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
