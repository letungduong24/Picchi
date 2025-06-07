import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import useConfirmStore from "../../store/confirmStore";

const Confirm = ({title, content, trueButton, handleTrue, handleFalse}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      onClick={handleFalse}
    >
      <div
        className="bg-white rounded-[20px] p-[20px] relative w-fit shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-full p-[10px]">
            <h3 className="text-[20px] font-bold">{title}</h3>
            <button
              onClick={handleFalse}
              className="text-[20px] text-gray-400 hover:text-gray-600 cursor-pointer"
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>

          {/* vạch ngăn cách */}
          <hr className="border-t border-black w-full" />

          <div className="flex items-center gap-3 mb-4 mt-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
              <PiWarningCircleBold className="text-black text-4xl" />
            </div>
            <p className="text-[20px] font-medium">
              {content}
            </p>
          </div>

          <div className="flex gap-2 w-full justify-end">
            <button
              onClick={handleTrue}
              className="bg-(--color-violet) hover:bg-[#58467e] duration-300 transition-all text-white py-1 px-4 rounded-[20px] text-[20px]  cursor-pointer w-fit"
            >
              {trueButton}
            </button>

            <button
              onClick={handleFalse}
              className="text-(--color-violet) px-4 py-1 rounded-[20px] text-[20px]  border border-(--color-violet) hover:bg-violet-100 transition-all duration-300 cursor-pointer w-fit"
              
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
