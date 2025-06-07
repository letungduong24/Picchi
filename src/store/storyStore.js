import { create } from 'zustand';
import Pic_giang1 from '../assets/pic_giang1.png'; 
import Pic_giang from '../assets/pic_giang.png';

const useStoryStore = create((set, get) => ({
  stories: [
    { id: 1, time: "3 phút trước", storyImg: Pic_giang1, isError: true },
    { id: 2, time: "4 tiếng trước", storyImg: Pic_giang , isError: true },
    { id: 3, time: "18 tiếng trước", storyImg: Pic_giang1, isError: true },
    { id: 4, time: "1 ngày trước", storyImg: Pic_giang1, isError: true },
    { id: 5, time: "1 ngày trước", storyImg: Pic_giang1, isError: true },
    { id: 6, time: "3 ngày trước", storyImg: Pic_giang1, isError: false },
    { id: 7, time: "4 ngày trước", storyImg: Pic_giang1, isError: false },
    { id: 8, time: "4 ngày trước", storyImg: Pic_giang1, isError: false },
    { id: 9, time: "5 ngày trước", storyImg: Pic_giang1, isError: false },
    { id: 10, time: "6 ngày trước", storyImg: Pic_giang1, isError: false },
  ],

  deleteStory: (id) => {
    const updatedStories = get().stories.filter(story => story.id !== id);
    set({ stories: updatedStories });
  },

}));

export default useStoryStore;
