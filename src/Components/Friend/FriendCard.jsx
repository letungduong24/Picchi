import React from 'react'

const FriendCard = ({id, name, avatar, handleDelete}) => {
  return (
    <div className='w-full p-[20px] flex justify-between aspect-[4/1] bg-(--color-gray) rounded-[20px] items-center'>
      <div className="flex items-center gap-1">
        <div className="w-[100px] h-[100px] rounded shrink-0">
          <img className='rounded-full' src={avatar} alt="" />
        </div>
        <div className="font-bold text-xl">{name}</div>
      </div>
      <div className="shrink-0">
        <button onClick={handleDelete} className='bg-white px-3 py-1.5 rounded-[20px] font-bold cursor-pointer hover:bg-gray-100 shadow durati0n-300 transition-all'>Hủy kết bạn</button>
      </div>
    </div>
  )
}

export default FriendCard
