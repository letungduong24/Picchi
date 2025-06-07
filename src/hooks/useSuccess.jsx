import { useState } from 'react';

const useSuccess = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  const handleOpenSuccess = () => {
    setShowSuccess(true);
  };

  // Trả ra các giá trị để sử dụng
  return { showSuccess, handleOpenSuccess, handleCloseSuccess };
};

export default useSuccess;
