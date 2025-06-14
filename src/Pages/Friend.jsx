import React, { useState } from "react";
import useFriendStore from "../store/friendStore";
import FriendCard from "../Components/Friend/FriendCard";
import RequestCard from "../Components/Friend/RequestCard";
import useConfirmStore from "../store/confirmStore";
import useSuccessStore from "../store/successStore";
import useErrorStore from "../store/errorStore";
import SearchResult from '../Components/Friend/SearchResult';

const Friend = () => {
  const {friends, requests, deleteFriend, search, deleteRequest, searchResult} = useFriendStore();
  const [tab, setTab] = useState('friend')
  const {showConfirm} = useConfirmStore()
  const {showSuccess} = useSuccessStore();
  const {showError} = useErrorStore();

  const handleChangeTab = (type) => {
    setTab(type);
  };

  const handleDeleteFriend = (friend) => {
    deleteFriend(friend);
    showConfirm({
      title: "Hủy kết bạn",
      content: "Bạn có chắc chắn muốn hủy kết bạn không ?",
      trueButton: "Xác nhận",
      onConfirm: () => {
        if (friend.isError) {
          deleteFriend(friend.id);
          useConfirmStore.getState().hideConfirm();
          showSuccess({
            title: "Hủy kết bạn",
            content: "Hủy kết bạn thành công",
            button: "Đóng",
          });
        } else {
          showError({
            title: "Hủy kết bạn",
            content: "Người dùng này không tồn tại.",
            button: "Đóng",
          });
        }
      },
    });
  }
  const handleDeleteAccept = (request) => {
       if(request.isError){
              deleteRequest(request);   
              deleteRequest(request.id); 
              useConfirmStore.getState().hideConfirm(); 
              showSuccess({
                title: 'Lời mời kết bạn',
                content: 'Kết bạn thành công',
                button: 'Đóng'
              })
            } else {
              showError({
                title: 'Hủy kết bạn',
                content: 'Người dùng này không tồn tại.',
                button: 'Đóng'
              })
            }
  }

  const handleDeleteDecline = (request) => {
        if(request.isError){
              deleteRequest(request);   
              deleteRequest(request.id); 
              useConfirmStore.getState().hideConfirm(); 
              showSuccess({
                title: 'Lời mời kết bạn',
                content: 'Từ chối lời mời kết bạn thành công',
                button: 'Đóng'
              })
            } else {
              showError({
                title: 'Hủy kết bạn',
                content: 'Người dùng này không tồn tại.',
                button: 'Đóng'
              })
            }
  }

  const handleSearchChange = (e) => {
    if (e.target.value.toLowerCase() === 'lỗi') {
      showError({
        title: 'Tìm kiếm',
        content: 'Tìm kiếm thất bại, vui lòng thử lại sau.',
        button: 'Đóng'
      });
      return;
    }
    search(e.target.value)
    if(e.target.value.trim() === '') {
      handleChangeTab('friend')
    } else if(tab !== 'search'){
      handleChangeTab('search')
    }
  }

  const handleSearch = (value) => {
    if (value.toLowerCase() === 'lỗi') {
      showError({
        title: 'Tìm kiếm',
        content: 'Tìm kiếm thất bại, vui lòng thử lại sau.',
        button: 'Đóng'
      });
      return;
    }
    search(value)
    if(value.trim() === '') {
      handleChangeTab('friend')
    } else if(tab !== 'search'){
      handleChangeTab('search')
    }
  }

  return (
    <div>
      <div className="p-[20px] bg-(--color-gray) flex-1 flex flex-col gap-3">
        <div className="bg-white rounded-[20px]">
          {/* topbar */}
          <div className="p-[20px] flex justify-between items-center">
            <div className="font-bold text-(--color-violet) flex gap-[20px]">
              <button
                onClick={() => handleChangeTab("friend")}
                className={
                  tab === "friend"
                    ? "border-b-2 border-(--color-violet)"
                    : "cursor-pointer"
                }
              >
                Bạn bè
              </button>
              <button
                onClick={() => handleChangeTab("request")}
                className={
                  tab === "request"
                    ? "border-b-2 border-(--color-violet)"
                    : "cursor-pointer"
                }
              >
                Lời mời kết bạn
              </button>
            </div>
            <div className="">
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-[10px]">
                <input 
                  className="border rounded-[100px] px-[10px] py-[5px]" 
                  type="text" 
                  placeholder="Tìm kiếm bạn bè"  
                  onChange={(e) => handleSearchChange(e)}
                  id="searchInput"
                />
                <button 
                  className="bg-(--color-violet) text-white font-bold text-sm px-[14px] py-[8px] rounded-[20px] cursor-pointer" 
                  type="button"
                  onClick={() => handleSearch(document.getElementById('searchInput').value)}
                >
                  Tìm
                </button>
              </form>
            </div>
          </div>
          {/* friend wrap */}
          <div className="grid grid-cols-2 gap-[30px] p-[30px]">
            {tab === 'friend' && friends.map((friend) => (
              <FriendCard handleDelete={() => handleDeleteFriend(friend)} avatar={friend.avatar} name={friend.name} />
            ))}
            {tab === 'request' && requests.map((request) => (
              <RequestCard handleDeleteAccept={() => handleDeleteAccept(request)} handleDeleteDecline={() => handleDeleteDecline(request)} avatar={request.avatar} name={request.name} />
            ))}
            {tab === 'search' && (
              searchResult.length > 0 ? (
                searchResult.map((user) => (
                  <SearchResult key={user.id} id={user.id} avatar={user.avatar} name={user.name} />
                ))
              ) : (
                <div className="col-span-2 text-center text-gray-500">
                  Không có người dùng nào
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
