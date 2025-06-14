import React, { useState } from "react";
import { MdFilterListAlt } from "react-icons/md";
import SmallStory from "../Components/Story/SmallStory";
import useFeedStore from '../store/feedStore';
import { useNavigate } from "react-router-dom";
import Default from '../assets/default.png'

const StoryCreate = () => {
  const [caption, setCaption] = useState('');
  const [previewCaption, setPreviewCaption] = useState('Chưa có mô tả')
  const [image, setImage] = useState(Default)
  const [isImageUploaded, setIsImageUploaded] = useState(false)
  const [isFirstAttempt, setIsFirstAttempt] = useState(true)
  const navigate = useNavigate()
  const { showError } = useErrorStore()
  const { showSuccess } = useSuccessStore()
  const { showConfirm } = useConfirmStore()
  
  const handleOpenStory = (story) => {
    setDetailStory(story)
    navigate('/story');
  }

  const handleTypeCaption = (e) => {
    const value = e.target.value;
    setCaption(value);
    setPreviewCaption(value.length === 0 ? 'Chưa có mô tả' : value);
  };

  return (
    <div className="p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3 items-center">
      <div className="topbar flex justify-center items-center">
        <p className='font-bold text-2xl text-(--color-violet)'>ĐĂNG TIN MỚI</p>
      </div>
      <div className="p-[30px] w-full justify-center bg-white rounded-[20px] flex-1 flex gap-[30px]">
          <div className="h-full aspect-square flex flex-col">
            <p className="flex justify-center text-xl font-bold">Soạn tin</p>
            <div className="flex-1 flex items-center justify-center">
              <form onSubmit={handleSubmit} className="border-1 h-full rounded-[20px] w-full p-5 items-center justify-center flex flex-col gap-4">
                <div className="space-y-2 w-full">
                  <p className="font-bold">Chọn ảnh:</p>
                  <label className="cursor-pointer w-full shadow-lg p-3 rounded-[20px] flex justify-center border-1 hover:bg-violet-100 transition-all duration-300" htmlFor="image-upload">Tải ảnh lên</label>
                  <input 
                    hidden 
                    type="file" 
                    name="" 
                    id="image-upload" 
                    accept=".png,.jpg,.jpeg"
                    onChange={handleImageUpload}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <p className="font-bold">Nhập mô tả:</p>
                  <input value={caption} onChange={(e) => handleTypeCaption(e)} type="text" placeholder="Nhập mô tả tại đây" className="rounded-[20px] border p-3 w-full"/>
                </div>
                <div className="grid grid-cols-2 w-full gap-1">
                  <button 
                    type="submit"
                    className={`bg-(--color-violet) text-white font-bold p-3 rounded-[20px] cursor-pointer hover:bg-[#58467e] duration-300 transition-all ${!isImageUploaded ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isImageUploaded}
                  >
                    Đăng tin
                  </button>
                  <button 
                    type="button" 
                    onClick={handleCancel} 
                    className={`bg-(--color-gray) border font-bold p-3 rounded-[20px] hover:bg-violet-100 transition-all duration-300 cursor-pointer ${!isImageUploaded && caption.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isImageUploaded && caption.length === 0}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" h-full aspect-[3/4] flex flex-col">
            <p className="flex justify-center text-xl font-bold">Xem trước tin</p>
            <div
             style={{ backgroundImage: `url(${image})` }}
             className="flex-1 border-1 rounded-[20px] bg-cover bg-center relative p-[20px] flex items-end"
            >
              <p className="flex justify-center items-center h-1/9 w-full bg-(--color-gray) rounded-[20px]">{previewCaption}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default StoryCreate;
