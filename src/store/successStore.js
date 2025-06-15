import { create } from 'zustand';

const useSuccessStore = create((set) => ({
  successModal: {
    show: false,
    title: '',
    content: '',
    button: 'Đóng',
    onClose: null,
  },

  showSuccess: ({ title, content, button = 'Đóng', onClose = null }) =>
    set({
      successModal: {
        show: true,
        title,
        content,
        button,
        onClose,
      },
    }),

  hideSuccess: () =>
    set((state) => {
      if (state.successModal.onClose) {
        state.successModal.onClose();
      }
      return {
        successModal: {
          ...state.successModal,
          show: false,
          onClose: null,
        },
      };
    }),
}));

export default useSuccessStore;
