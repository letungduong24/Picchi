import React, { useRef } from 'react';
import GridWrap from './GridWrap';
import GridImage from './GridImage';
import Default from '../../assets/default.png';
import useErrorStore from '../../store/errorStore';
import useSuccessStore from '../../store/successStore';
import useConfirmStore from '../../store/confirmStore';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const GridComposer = () => {
  const [images, setImages] = React.useState(Array(9).fill(null));
  const [isFirstAttempt, setIsFirstAttempt] = React.useState(true);
  const [isGridCreated, setIsGridCreated] = React.useState(false);
  const [isFirstDownloadAttempt, setIsFirstDownloadAttempt] = React.useState(true);
  const fileInputRefs = useRef([]);
  const { showError } = useErrorStore();
  const { showSuccess } = useSuccessStore();
  const { showConfirm } = useConfirmStore();
  const navigate = useNavigate();

  const handleImageChange = (idx, file) => {
    if (!file) return;
    const validFormats = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!validFormats.includes(file.type)) {
      showError({
        title: 'Tạo lưới ảnh',
        content: 'Định dạng ảnh không hợp lệ. Vui lòng chọn ảnh có định dạng jpg/jpeg/png.',
        button: 'Đóng',
      });
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImages = [...images];
      newImages[idx] = e.target.result;
      setImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (idx) => {
    const newImages = [...images];
    newImages[idx] = null;
    setImages(newImages);
  };

  const handlePickImage = (idx) => {
    if (fileInputRefs.current[idx]) {
      fileInputRefs.current[idx].click();
    }
  };

  const isFull = images.every(img => img);
  const isImageUploaded = isFull;
  const hasAnyImage = images.some(img => img);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isImageUploaded) return;

    if (isFirstAttempt) {
      showError({
        title: 'Tạo lưới ảnh',
        content: 'Lỗi khi tạo lưới ảnh, vui lòng thử lại sau.',
        button: 'Đóng',
      });
      setIsFirstAttempt(false);
      return;
    }

    showSuccess({
      title: 'Tạo lưới ảnh',
      content: 'Tạo lưới ảnh thành công',
      button: 'Đóng',
      onClose: () => setIsGridCreated(true),
    });
  };

  const handleDownload = () => {
    if (isFirstDownloadAttempt) {
      showError({
        title: 'Tải lưới ảnh',
        content: 'Tải về thất bại, vui lòng thử lại sau',
        button: 'Đóng',
      });
      setIsFirstDownloadAttempt(false);
      return;
    }
    showSuccess({
      title: 'Tải lưới ảnh',
      content: 'Tải lưới ảnh thành công',
      button: 'Đóng',
      onClose: () => navigate('/'),
    });
  };

  const handleCancel = () => {
    showConfirm({
      title: 'Hủy tạo lưới ảnh',
      content: 'Bạn có chắc muốn hủy tạo lưới ảnh không? Thao tác này sẽ xóa toàn bộ ảnh đã chọn.',
      trueButton: 'Xác nhận',
      onConfirm: () => {
        setImages(Array(9).fill(null));
        setIsFirstAttempt(true);
        setIsGridCreated(false);
      },
    });
  };

  const handlePost = () => {
    navigate('/create-story');
  };

  if (isGridCreated) {
    return (
      <GridWrap>
        <div className="relative bg-white rounded-[20px] p-[18px] w-[546px] mx-auto flex flex-col gap-[10px]">
          <button
            className="absolute left-[-520px] top-[25px] w-[60px] h-[60px] flex items-center justify-center rounded-full border-2 border-black bg-white text-black text-[32px] cursor-pointer hover:bg-gray-100 transition shadow"
            onClick={() => { setIsGridCreated(false); setIsFirstAttempt(true); }}
            aria-label="Quay lại"
            type="button"
            style={{ zIndex: 10 }}
          >
            <FiArrowLeft />
          </button>
          <div className="grid grid-cols-3 gap-[10px] mt-[10px]">
            {images.map((img, idx) => (
              <div key={idx} className="w-full aspect-[3/4] bg-[#D9D9D9] rounded-[5px] overflow-hidden flex items-center justify-center">
                {img && <img src={img} alt="" className="w-full h-full object-cover" />}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
            <button type="button" className="bg-(--color-violet) text-white font-bold p-[18px] rounded-[20px] cursor-pointer hover:bg-[#58467e] duration-300 transition-all" onClick={handleDownload}>
              Tải lưới ảnh
            </button>
            <button type="button" className="bg-(--color-violet) text-white font-bold p-[18px] rounded-[20px] cursor-pointer hover:bg-[#58467e] duration-300 transition-all" onClick={handlePost}>
              Đăng tin
            </button>
          </div>
        </div>
      </GridWrap>
    );
  }

  return (
    <GridWrap>
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-[20px] p-[18px] w-[546px] mx-auto flex flex-col gap-[10px]">
          <div className="grid grid-cols-3 gap-[10px]">
            {images.map((img, idx) => (
              <GridImage
                key={idx}
                image={img}
                defaultImg={Default}
                onPickImage={() => handlePickImage(idx)}
                onRemoveImage={() => handleRemoveImage(idx)}
                inputRef={el => fileInputRefs.current[idx] = el}
                onFileChange={file => handleImageChange(idx, file)}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-[10px] mt-[10px]">
            <button type="button" onClick={handleCancel} className={`bg-white border font-bold p-[18px] rounded-[20px] hover:bg-violet-100 transition-all duration-300 cursor-pointer ${hasAnyImage ? '' : 'opacity-40 pointer-events-none'}`} disabled={!hasAnyImage}>
              Hủy
            </button>
            <button
              type="submit"
              className={`bg-(--color-violet) text-white font-bold p-[18px] rounded-[20px] cursor-pointer hover:bg-[#58467e] duration-300 transition-all ${isFull ? '' : 'opacity-40 pointer-events-none'}`}
              disabled={!isFull}
            >
              Tạo lưới ảnh
            </button>
          </div>
        </div>
      </form>
    </GridWrap>
  );
};

export default GridComposer;
