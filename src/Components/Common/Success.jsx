import React from 'react'
import useSuccess from '../../hooks/useSuccess'
import { IoCheckmarkCircle } from "react-icons/io5"; 

const Success = ({title, content, button, handleClose}) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={handleModalClick}
        >
          <div 
          className="bg-white rounded-[20px] p-[20px] relative w-fit shadow-lg"
          >
            <div className="flex items-center justify-between w-full p-[10px]">
              <h3 className="text-[20px] font-bold">{title}</h3>
              <button
                onClick={handleClose}
                className="text-[20px] text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* vạch ngăn cách */}
            <hr className="border-t border-black w-full" /> 

            <div className="flex items-center justify-center gap-3 mb-4 mt-4">
              <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center border-2 border-white">
                <IoCheckmarkCircle className="text-white text-4xl" />
              </div>
              <p className="text-[20px] font-medium">{content}</p>
            </div>

            <div className="w-full flex justify-center">
              <button
                  onClick={handleClose}
                  className="text-[var(--color-violet)] px-4 py-1 rounded-[20px] text-[20px] font-medium border border-[var(--color-violet)] hover:bg-violet-100 transition cursor-pointer"
              >
                    {button}
              </button>
            </div>
          </div>
        </div>
  )
}

export default Success