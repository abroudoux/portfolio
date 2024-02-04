import { create } from "zustand";

interface Store {
  isLoading: boolean;
  isProjectCardHovered: boolean;
  isTextHovered: boolean;
  setIsLoading: (value: boolean) => void;
  setIsProjectCardHovered: (value: boolean) => void;
  setIsTextHovered: (value: boolean) => void;
}

const useStore = create<Store>((set) => ({
  isLoading: false,
  isProjectCardHovered: false,
  isTextHovered: false,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setIsProjectCardHovered: (value: boolean) =>
    set({ isProjectCardHovered: value }),
  setIsTextHovered: (value: boolean) => set({ isTextHovered: value }),
}));

export default useStore;
