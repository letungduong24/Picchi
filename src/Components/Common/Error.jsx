import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";

const Error = ({title, content, button, handleClose}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-[20px] p-4 relative w-[460px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full mb-2">
          <h3 className="text-[20px] font-bold">{title}</h3>
          <button
            onClick={handleClose}
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
          <div className="w-10 h-10 rounded-full bg-[red] flex items-center justify-center border-2 border-white">
            <PiWarningCircleBold className="text-white text-5xl" />
          </div>
          <p className="text-[20px] font-medium">
            {content}
          </p>
        </div>

        <div className="w-full flex justify-end">
          <button
            onClick={handleClose}
            className="text-(--color-violet) px-4 py-1 rounded-[20px] text-[20px] font-medium border border-(--color-violet) hover:bg-violet-100 transition cursor-pointer"
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
