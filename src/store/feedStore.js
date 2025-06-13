import { create } from "zustand";
import p1 from "../assets/1.jpg";
import p2 from "../assets/2.jpg";
import p3 from "../assets/3.jpg";
import p4 from "../assets/4.jpg";
import p5 from "../assets/5.jpg";
import p6 from "../assets/6.jpg";
import p7 from "../assets/7.jpg";
import p8 from "../assets/8.jpg";
import p9 from "../assets/9.jpg";
import p10 from "../assets/10.jpg";
import avt from "../assets/user.png";

const useFeedStore = create((set, get) => ({
  stories: [
    {
      id: 1,
      name: "Dương",
      time: "3 phút trước",
      storyImg: p6,
      avatar: avt,
      isError: false,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 2,
      name: "Giang",
      time: "4 tiếng trước",
      storyImg: p7,
      avatar: avt,
      isError: false,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 3,
      name: "Tú",
      time: "18 tiếng trước",
      storyImg: p8,
      avatar: avt,
      isError: false,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 4,
      name: "Chung",
      time: "1 ngày trước",
      storyImg: p9,
      avatar: avt,
      isError: false,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 5,
      name: "Đức",
      time: "1 ngày trước",
      storyImg: p10,
      avatar: avt,
      isError: false,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 6,
      name: "Giang",
      time: "3 ngày trước",
      storyImg: p1,
      avatar: avt,
      isError: false,
      likeOrChatError: true,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 7,
      name: "Dương",
      time: "4 ngày trước",
      storyImg: p2,
      avatar: avt,
      isError: true,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 8,
      name: "Chung",
      time: "4 ngày trước",
      storyImg: p3,
      avatar: avt,
      isError: false,
      likeOrChatError: true, // de bo sung LOI chat or like
      content: "Hôm nay đẹp trời",
    },
    {
      id: 9,
      name: "Đức",
      time: "5 ngày trước",
      storyImg: p4,
      avatar: avt,
      isError: false,
      likeOrChatError: true,
      content: "Hôm nay đẹp trời",
    },
    {
      id: 10,
      name: "Tú",
      time: "6 ngày trước",
      storyImg: p5,
      avatar: avt,
      isError: true,
      content: "Hôm nay đẹp trời",
    },
  ],
  detailStory: null,
  isShowDetailStory: false,
  setDetailStory: (story) => {
    set({ detailStory: story });
  },
  hideDetailStory: () => {
    set({ detailStory: null });
  },
}));

export default useFeedStore;
