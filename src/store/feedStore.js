import { create } from 'zustand';
import p1 from '../assets/1.jpg'; 
import p2 from '../assets/2.jpg'; 
import p3 from '../assets/3.jpg'; 
import p4 from '../assets/4.jpg'; 
import p5 from '../assets/5.jpg'; 
import avt from '../assets/user.png'

const useFeedStore = create((set, get) => ({
  stories: [
    { id: 1, name:'Dương', time: "3 phút trước", storyImg: p1, avatar: avt, isError: true, content:'Hôm nay đẹp trời' },
    { id: 2, name: 'Giang', time: "4 tiếng trước", storyImg: p2 , avatar: avt, isError: true, content:'Hôm nay đẹp trời' },
    { id: 3, name: 'Tú', time: "18 tiếng trước", storyImg: p3, avatar: avt, isError: true, content:'Hôm nay đẹp trời' },
    { id: 4, name: 'Chung', time: "1 ngày trước", storyImg: p4, avatar: avt, isError: true, content:'Hôm nay đẹp trời' },
    { id: 5, name: 'Đức', time: "1 ngày trước", storyImg: p5, avatar: avt, isError: true, content:'Hôm nay đẹp trời' },
    { id: 6, name: 'Giang', time: "3 ngày trước", storyImg: p1, avatar: avt, isError: false, content:'Hôm nay đẹp trời' },
    { id: 7, name: 'Dương', time: "4 ngày trước", storyImg: p2, avatar: avt, isError: false, content:'Hôm nay đẹp trời' },
    { id: 8, name: 'Chung', time: "4 ngày trước", storyImg: p3, avatar: avt, isError: false, content:'Hôm nay đẹp trời' },
    { id: 9, name: 'Đức', time: "5 ngày trước", storyImg: p4, avatar: avt, isError: false, content:'Hôm nay đẹp trời' },
    { id: 10, name: 'Tú', time: "6 ngày trước", storyImg: p5, avatar: avt, isError: false, content:'Hôm nay đẹp trời' },
  ],

  detailStory: null,
  isShowDetailStory: false,

  setDetailStory: (story) => {
    set({ detailStory: story });
  },

  hideDetailStory: () => {
    set({ detailStory: null });
  }
}));

export default useFeedStore;
