import { create } from "zustand";

type LayoutState = {
    isFullScreen: boolean;
    isTabBarVisible: boolean;
};

type LayoutActions = {
    setIsFullScreen: (isFullScreen: boolean) => void;
    setIsTabBarVisible: (isTabBarVisible: boolean) => void;
};

const initialState: LayoutState = {
    isFullScreen: false,
    isTabBarVisible: true,
}

export const useLayoutStore = create<LayoutState & LayoutActions>()((set, _) => ({
    ...initialState,
    setIsFullScreen: (isFullScreen) => set({ isFullScreen }),
    setIsTabBarVisible: (isTabBarVisible) => set({ isTabBarVisible }),
    reset: () => set(initialState),
}))



