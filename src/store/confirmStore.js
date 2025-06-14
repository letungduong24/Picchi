import { create } from 'zustand';

const useConfirmStore = create((set) => ({
  confirmModal: {
    show: false,
    title: '',
    content: '',
    trueButton: 'Xác nhận',
    cancelButton: 'Hủy',
    onConfirm: null,
  },

  showConfirm: ({ title, content, trueButton = 'Xác nhận', cancelButton = 'Hủy', onConfirm }) =>
    set({
      confirmModal: {
        show: true,
        title,
        content,
        trueButton,
        cancelButton,
        onConfirm,
      },
    }),

  hideConfirm: () =>
    set((state) => ({
      confirmModal: { ...state.confirmModal, show: false },
    })),
}));

export default useConfirmStore;
