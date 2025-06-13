import React from "react";

<<<<<<< HEAD
const RequestCard = ({id, avatar, name, handleDeleteAccept, handleDeleteDecline}) => {
  return (
    <div className="w-full p-[20px] flex justify-between aspect-[4/1] bg-(--color-gray) rounded-[20px] items-center">
      <div className="flex items-center gap-1">
        <div className="w-[100px] h-[100px] rounded shrink-0">
=======
const RequestCard = ({avatar, name}) => {
  return (
    <div className="w-full p-[20px] flex justify-between aspect-[4/1] bg-(--color-gray) rounded-[20px] items-center">
      <div className="flex items-center gap-1">
        <div className="w-[19%] rounded shrink-0">
>>>>>>> main
          <img className="rounded-full" src={avatar} alt="" />
        </div>
        <div className="font-bold text-xl">{name}</div>
      </div>
      <div className="shrink-0 flex gap-[10px]">
<<<<<<< HEAD
        <button onClick={handleDeleteAccept} className="bg-(--color-violet) text-white px-3 py-1.5 rounded-[20px] font-bold cursor-pointer">
          Đồng ý
        </button>
        <button onClick={handleDeleteDecline} className="bg-white px-3 py-1.5 rounded-[20px] font-bold cursor-pointer">
=======
        <button className="bg-(--color-violet) text-white px-3 py-1.5 rounded-[20px] font-bold cursor-pointer">
          Đồng ý
        </button>
        <button className="bg-white px-3 py-1.5 rounded-[20px] font-bold cursor-pointer">
>>>>>>> main
          Từ chối
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
