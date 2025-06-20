import React from 'react'
import useSuccessStore from '../../store/successStore'

const SearchResult = ({id, avatar, name}) => {
  const { showSuccess } = useSuccessStore();

  const handleSendRequest = () => {
    showSuccess({
      title: 'Gửi lời mời kết bạn',
      content: 'Gửi lời mời kết bạn thành công',
      button: 'Đóng'
    });
  };

  return (
    <div className='w-full p-[20px] flex justify-between aspect-[4/1] bg-(--color-gray) rounded-[20px] items-center'>
      <div className="flex items-center gap-1">
        <div className="w-[100px] h-[100px] rounded shrink-0">
          <img className='rounded-full' src={avatar} alt="" />
        </div>
        <div className="font-bold text-xl">{name}</div>
      </div>
      <div className="shrink-0">
        <button 
          onClick={handleSendRequest}
          className='bg-white px-3 py-1.5 rounded-[20px] font-bold cursor-pointer'
        >
          Thêm bạn bè
        </button>
      </div>
    </div>
  )
}

export default SearchResult;