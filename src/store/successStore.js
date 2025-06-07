import { create } from 'zustand';

const useSuccessStore = create((set) => ({
  successModal: {
    show: false,
    title: '',
    content: '',
    button: 'Đóng'
  },

  showSuccess: ({ title, content, button = 'Đóng'}) =>
    set({
      successModal: {
        show: true,
        title,
        content,
        button,
      },
    }),

  hideSuccess: () =>
    set((state) => ({
      successModal: { ...state.successModal, show: false },
    })),
}));

export default useSuccessStore;
