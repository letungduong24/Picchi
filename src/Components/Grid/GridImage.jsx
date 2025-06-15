import React from 'react';
import { MdCancel } from 'react-icons/md';

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
          className="cursor-pointer absolute top-0 right-0 text-white hover:text-gray-50/80 text-3xl"
          onClick={onRemoveImage}
          type="button"
        >
          <MdCancel />
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
