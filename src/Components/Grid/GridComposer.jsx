import React, { useRef } from 'react';
import GridWrap from './GridWrap';
import GridImage from './GridImage';
import Default from '../../assets/default.png';
import useErrorStore from '../../store/errorStore';
import useSuccessStore from '../../store/successStore';
import useConfirmStore from '../../store/confirmStore';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';

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

  const handleDownload = async () => {
    try {
      const gridElement = document.getElementById('image-grid');
      if (!gridElement) return;

      const canvas = await html2canvas(gridElement, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        scale: 2, // Higher quality
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'grid-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showSuccess({
        title: 'Tải lưới ảnh',
        content: 'Tải lưới ảnh thành công',
        button: 'Đóng'
      });
    } catch (error) {
      showError({
        title: 'Tải lưới ảnh',
        content: 'Tải về thất bại, vui lòng thử lại sau',
        button: 'Đóng',
      });
    }
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

  const handlePost = async () => {
    try {
      const gridElement = document.getElementById('image-grid');
      if (!gridElement) return;

      const canvas = await html2canvas(gridElement, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        scale: 2, // Higher quality
      });

      const image = canvas.toDataURL('image/png');
      navigate('/create-story', { state: { initImage: image } });
    } catch (error) {
      showError({
        title: 'Tạo lưới ảnh',
        content: 'Không thể tạo ảnh, vui lòng thử lại sau',
        button: 'Đóng',
      });
    }
  };

  if (isGridCreated) {
    return (
      <GridWrap isCreatedGrid={isGridCreated} setIsFirstAttempt={setIsFirstAttempt} setIsGridCreated={setIsGridCreated}>
        <div className="relative bg-white rounded-[20px] p-[18px] w-[546px] mx-auto flex flex-col h-full">
          <div id="image-grid" className="grid grid-cols-3 gap-[10px] flex-1">
            {images.map((img, idx) => (
              <div key={idx} className="w-full aspect-[3/4] bg-[#D9D9D9] rounded-[5px] overflow-hidden flex items-center justify-center">
                {img && <img src={img} alt="" className="w-full h-full object-cover" crossOrigin="anonymous" />}
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
      <form onSubmit={handleSubmit} className="h-full">
        <div className="bg-white rounded-[20px] p-[18px] w-[546px] mx-auto flex flex-col h-full">
          <div className="grid grid-cols-3 gap-[10px] flex-1">
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
            <button type="button" onClick={handleCancel} className={`bg-white border font-bold p-[18px] rounded-[20px] hover:bg-gray-100 shadow transition-all duration-300 cursor-pointer ${hasAnyImage ? '' : 'opacity-40 pointer-events-none'}`} disabled={!hasAnyImage}>
              Hủy
            </button>
            <button
              type="submit"
              className={`bg-(--color-violet) shadow text-white font-bold p-[18px] rounded-[20px] cursor-pointer hover:bg(--color-lviolet) shadow duration-300 transition-all ${isFull ? '' : 'opacity-40 pointer-events-none'}`}
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
