import { create } from 'zustand';
import p1 from '../assets/1.jpg';
import p2 from '../assets/2.jpg';

const useStoryStore = create((set, get) => ({
  stories: [
    { id: 1, time: "3 phút trước", storyImg: p1, isError: true },
    { id: 2, time: "4 tiếng trước", storyImg: p2 , isError: true },
    { id: 3, time: "18 tiếng trước", storyImg: p1, isError: true },
    { id: 4, time: "1 ngày trước", storyImg: p1, isError: true },
    { id: 5, time: "1 ngày trước", storyImg: p1, isError: true },
    { id: 6, time: "3 ngày trước", storyImg: p1, isError: false },
    { id: 7, time: "4 ngày trước", storyImg: p1, isError: false },
    { id: 8, time: "4 ngày trước", storyImg: p1, isError: false },
    { id: 9, time: "5 ngày trước", storyImg: p1, isError: false },
    { id: 10, time: "6 ngày trước", storyImg: p1, isError: false },
  ],

  deleteStory: (id) => {
    const updatedStories = get().stories.filter(story => story.id !== id);
    set({ stories: updatedStories });
  },

}));

export default useStoryStore;
