import avt from '../assets/user.png'
import { create } from 'zustand';

const useFriendStore = create((set, get) => ({
  friends: [
    { id: 1, name:'Tú',  avatar: avt, isError: true},
    { id: 2, name: 'Giang', avatar: avt, isError: true},
    { id: 3, name: 'Tú', avatar: avt, isError: true},
    { id: 4, name: 'Chung', avatar: avt, isError: true},
    { id: 5, name: 'Đức', avatar: avt, isError: true},
    { id: 6, name: 'Giang', avatar: avt, isError: false},
    { id: 7, name: 'Dương', avatar: avt, isError: false},
    { id: 8, name: 'Chung', avatar: avt, isError: false},
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
  
  searchResult: [],

  // Hàm cập nhật searchUserTerm

<<<<<<< HEAD
  // Hàm lọc allUsers theo searchUserTerm
  filteredUsers: () => {
  const { users, searchUserTerm } = get();
  if (!searchUserTerm.trim()) return [];
  const regex = new RegExp(`\\b${searchUserTerm}`, 'i');
  return users.filter(user => regex.test(user.name));
},
=======
  search: (keyword) => {
    const { users } = get();
    const filteredUsers = users.filter(user => {
      const nameWords = user.name.toLowerCase().split(' ');
      const searchWords = keyword.toLowerCase().split(' ');
      return searchWords.every(searchWord => 
        nameWords.some(nameWord => nameWord === searchWord)
      );
    });
    set({ searchResult: filteredUsers });
  },
>>>>>>> b0f7006c2bd771351b6e728abc198fa769ea9b02
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
