import { create } from 'zustand';
import p1 from '../assets/1.jpg'; 
import p2 from '../assets/2.jpg'; 
import p3 from '../assets/3.jpg'; 
import p4 from '../assets/4.jpg'; 
import p5 from '../assets/5.jpg'; 
import avt from '../assets/user.png'

const useFeedStore = create((set, get) => ({
  stories: [
    { id: 1, name:'Dương', time: "3 phút trước", storyImg: p1, avatar: avt, isError: true },
    { id: 2, name: 'Giang', time: "4 tiếng trước", storyImg: p2 , avatar: avt, isError: true },
    { id: 3, name: 'Tú', time: "18 tiếng trước", storyImg: p3, avatar: avt, isError: true },
    { id: 4, name: 'Chung', time: "1 ngày trước", storyImg: p4, avatar: avt, isError: true },
    { id: 5, name: 'Đức', time: "1 ngày trước", storyImg: p5, avatar: avt, isError: true },
    { id: 6, name: 'Giang', time: "3 ngày trước", storyImg: p1, avatar: avt, isError: false },
    { id: 7, name: 'Dương', time: "4 ngày trước", storyImg: p2, avatar: avt, isError: false },
    { id: 8, name: 'Chung', time: "4 ngày trước", storyImg: p3, avatar: avt, isError: false },
    { id: 9, name: 'Đức', time: "5 ngày trước", storyImg: p4, avatar: avt, isError: false },
    { id: 10, name: 'Tú', time: "6 ngày trước", storyImg: p5, avatar: avt, isError: false },
  ],

  detailStory: null,
  isShowDetailStory: false,

  setDetailStory: (story) => {
    set({ detailStory: story });
    set({ isShowDetailStory: true });
  },

  hideDetailStory: () => {
    set({ detailStory: null });
    set({ isShowDetailStory: false });
  }
}));

export default useFeedStore;
