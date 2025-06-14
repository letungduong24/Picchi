import React from 'react';

const GridImage = ({ image, defaultImg, onPickImage, onRemoveImage, inputRef, onFileChange }) => (
  <div className="w-full aspect-[3/4] bg-[#D9D9D9] rounded-[5px] flex items-center justify-center relative overflow-hidden group">
    <input
      type="file"
      accept="image/*"
      ref={inputRef}
      style={{ display: 'none' }}
      onChange={e => {
        if (e.target.files && e.target.files[0]) {
          onFileChange(e.target.files[0]);
        }
      }}
    />
    {image ? (
      <>
        <img src={image} alt="" className="w-full h-full object-cover" />
        <button
          className="absolute top-1.5 right-1.5 w-6 h-6 flex items-center justify-center rounded-full bg-white z-10 transition hover:bg-gray-100 cursor-pointer"
          onClick={onRemoveImage}
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="4" x2="14" y2="14" stroke="#B0B0B0" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="14" y1="4" x2="4" y2="14" stroke="#B0B0B0" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </>
    ) : (
      <button
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center cursor-pointer bg-cover bg-center"
        style={{ backgroundImage: `url(${defaultImg})` }}
        onClick={onPickImage}
        type="button"
      >
        <span className="absolute inset-0 bg-black opacity-40"></span>
        <span className="relative text-lg text-white z-10">
          Chọn ảnh
        </span>
      </button>
    )}
  </div>
);

export default GridImage;
