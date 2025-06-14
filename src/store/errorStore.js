import { create } from "zustand";

const useErrorStore = create((set) => ({
  errorModal: {
    show: false,
    title: "",
    content: "",
    button: "Đóng",
    onClose: null, //  thêm onClose
  },

  showError: ({ title, content, button = "Đóng", onClose = null }) =>
    set({
      errorModal: {
        show: true,
        title,
        content,
        button,
        onClose, //  truyền vào onClose nếu có
      },
    }),

  hideError: () =>
    set((state) => {
      // Gọi onClose nếu được truyền
      if (state.errorModal.onClose) {
        state.errorModal.onClose();
      }
      return {
        errorModal: {
          ...state.errorModal,
          show: false,
          onClose: null, // reset lại sau khi gọi
        },
      };
    }),
}));

export default useErrorStore;
