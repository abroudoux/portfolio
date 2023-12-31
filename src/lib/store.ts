import { create } from 'zustand';


interface Store {
    isLoading: boolean;
    isProjectCardHovered: boolean;
    setIsLoading: (value: boolean) => void;
    setIsProjectCardHovered: (value: boolean) => void;
};

const useStore = create<Store>((set) => ({
    isLoading: false,
    isProjectCardHovered: false,
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    setIsProjectCardHovered: (value: boolean) => set({ isProjectCardHovered: value }),
}));


export default useStore;
