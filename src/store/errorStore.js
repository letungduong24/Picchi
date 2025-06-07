import { create } from 'zustand';

const useErrorStore = create((set) => ({
  errorModal: {
    show: false,
    title: '',
    content: '',
    button: 'Đóng'
  },

  showError: ({ title, content, button = 'Đóng'}) =>
    set({
      errorModal: {
        show: true,
        title,
        content,
        button,
      },
    }),

  hideError: () =>
    set((state) => ({
      errorModal: { ...state.errorModal, show: false },
    })),
}));

export default useErrorStore;
