import React from 'react';

const GridWrap = ({ children }) => (
  <div className="px-[34px] py-[34px]  bg-(--color-gray) flex-1 flex flex-col gap-3">
    <div className="bg-white rounded-[20px]">
      {children}
    </div>
  </div>
);

export default GridWrap;