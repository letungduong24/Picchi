import React, { useState } from "react";
import useFriendStore from "../store/friendStore";
import FriendCard from "../Components/Friend/FriendCard";
import RequestCard from "../Components/Friend/RequestCard";
import useConfirmStore from "../store/confirmStore";
import useSuccessStore from "../store/successStore";
import useErrorStore from "../store/errorStore";

const Friend = () => {
  const {friends, requests, deleteFriend} = useFriendStore();
  const [tab, setTab] = useState('friend')
  const {showConfirm} = useConfirmStore()
  const {showSuccess} = useSuccessStore();
  const {showError} = useErrorStore();
  const handleChangeTab = (type) => {
    setTab(type)
  }

  const handleDeleteFriend = (friend) => {
    deleteFriend(friend);
    showConfirm({
      title: 'Hủy kết bạn',
      content: 'Bạn có chắc chắn muốn hủy kết bạn không ?',
      trueButton: 'Xác nhận',
      onConfirm: () => {
        if(friend.isError){
          deleteFriend(friend.id);
          useConfirmStore.getState().hideConfirm(); 
          showSuccess({
            title: 'Hủy kết bạn',
            content: 'Hủy kết bạn thành công',
            button: 'Đóng'
        })
        } else {
          showError({
            title: 'Hủy kết bạn',
            content: 'Người dùng này không tồn tại.',
            button: 'Đóng'
          })
        }
      },
    });
  }
  return (
    <div>
      <div className="p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3">
        <div className="bg-white rounded-[20px]">
          {/* topbar */}
          <div className="p-[20px] flex justify-between items-center">
            <div className="font-bold text-(--color-violet) flex gap-[20px]">
              <button onClick={() => handleChangeTab('friend')} className={tab === 'friend' ? 'border-b-2 border-(--color-violet)' : 'cursor-pointer'}>Bạn bè</button>
              <button onClick={() => handleChangeTab('request')} className={tab === 'request' ? 'border-b-2 border-(--color-violet)' : 'cursor-pointer'}>Lời mời kết bạn</button>
            </div>
            <div className="">
              <form className="flex gap-[10px]" action="">
                <input className="border rounded-[100px] px-[10px] py-[5px]" type="text" placeholder="Tìm kiếm bạn bè" />
                <button className="bg-(--color-violet) text-white font-bold text-sm px-[14px] py-[8px] rounded-[20px]" type="submit">Tìm</button>
              </form>
            </div>
          </div>
          {/* friend wrap */}
          <div className="grid grid-cols-2 gap-[30px] p-[30px]">
            {tab === 'friend' && friends.map((friend) => (
              <FriendCard handleDelete={() => handleDeleteFriend(friend)} avatar={friend.avatar} name={friend.name} />
            ))}
            {tab === 'request' && requests.map((request) => (
              <RequestCard avatar={request.avatar} name={request.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
