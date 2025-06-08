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

  deleteFriend: (id) => {
    const updatedFriends = get().friends.filter(friend => friend.id !== id);
    set({ friends: updatedFriends });
  },

}));

export default useFriendStore;
