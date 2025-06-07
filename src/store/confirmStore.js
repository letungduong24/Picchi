import { create } from 'zustand';

const useConfirmStore = create((set) => ({
  confirmModal: {
    show: false,
    title: '',
    content: '',
    trueButton: 'Xác nhận',
    onConfirm: null,
  },

  showConfirm: ({ title, content, trueButton = 'Xác nhận', onConfirm }) =>
    set({
      confirmModal: {
        show: true,
        title,
        content,
        trueButton,
        onConfirm,
      },
    }),

  hideConfirm: () =>
    set((state) => ({
      confirmModal: { ...state.confirmModal, show: false },
    })),
}));

export default useConfirmStore;
