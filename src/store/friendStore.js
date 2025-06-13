import avt from '../assets/user.png'
import { create } from 'zustand';

const useFriendStore = create((set, get) => ({
  friends: [
    { id: 100, name:'Tú',  avatar: avt, isError: true},
    { id: 200, name: 'Giang', avatar: avt, isError: true},
    { id: 300, name: 'Tú', avatar: avt, isError: true},
    { id: 400, name: 'Chung', avatar: avt, isError: true},
    { id: 500, name: 'Đức', avatar: avt, isError: true},
    { id: 600, name: 'Giang', avatar: avt, isError: false},
    { id: 700, name: 'Dương', avatar: avt, isError: false},
    { id: 800, name: 'Chung', avatar: avt, isError: false},
    { id: 900, name: 'Chung', avatar: avt, isError: false},
  ],
    requests: [
    { id: 1, name:'Tú',  avatar: avt, isError: true},
    { id: 2, name: 'Giang', avatar: avt, isError: true},
    { id: 3, name: 'Tú', avatar: avt, isError: true},
    { id: 4, name: 'Chung', avatar: avt, isError: true},
    { id: 5, name: 'Đức', avatar: avt, isError: true},
    { id: 6, name: 'Giang', avatar: avt, isError: false},
    { id: 7, name: 'Dương', avatar: avt, isError: false},
    { id: 8, name: 'Chung', avatar: avt, isError: false},
  ],
   users: [
    { id: 1, name: 'An', avatar: avt,  isError: true },
    { id: 2, name: 'Bình', avatar: avt,  isError: true },
    { id: 3, name: 'Cường', avatar: avt,  isError: true },
    { id: 4, name: 'Dũng', avatar: avt,  isError: true},
    { id: 5, name: 'Hương', avatar: avt,  isError: true },
    { id: 6, name: 'Giang', avatar: avt,isError: true },
    { id: 7, name: 'Hải', avatar: avt, isError: true },
    { id: 8, name: 'Tú', avatar: avt, isError: false},
  ],
   // State tìm kiếm riêng cho allUsers
  searchUserTerm: '',

  // Hàm cập nhật searchUserTerm
  setSearchUserTerm: (term) => set({ searchUserTerm: term }),

  // Hàm lọc allUsers theo searchUserTerm
  filteredUsers: () => {
  const { users, searchUserTerm } = get();
  if (!searchUserTerm) return users;
  return users.filter(user =>
    user.name.toLowerCase().includes(searchUserTerm.toLowerCase())
  );
},

  deleteFriend: (id) => {
    const updatedFriends = get().friends.filter(friend => friend.id !== id);
    set({ friends: updatedFriends });
  },
  deleteRequest: (id) => {
    const updatedRequests = get().requests.filter(request => request.id !==id);
    set({ requests: updatedRequests});
  }
}));
export default useFriendStore;
