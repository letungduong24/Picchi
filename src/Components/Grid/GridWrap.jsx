import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const GridWrap = ({ children, isCreatedGrid, setIsFirstAttempt, setIsGridCreated }) => (
  <div className="p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3">
    <div className="bg-white flex-1 rounded-[20px] relative ">
      {isCreatedGrid && (
        <button
            className="absolute left-4 top-4 w-[50px] z-40 h-[50px] flex items-center justify-center rounded-full border-2 border-black bg-white text-black text-[32px] cursor-pointer hover:bg-gray-100 transition shadow"
            onClick={() => { setIsGridCreated(false); setIsFirstAttempt(true); }}
            aria-label="Quay lại"
            type="button"
            style={{ zIndex: 10 }}
          >
            <FiArrowLeft />
          </button>
      )}
      {children}
    </div>
  </div>
);

export default GridWrap;