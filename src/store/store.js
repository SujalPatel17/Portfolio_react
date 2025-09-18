import { create } from "zustand";

const useStore = create((set) => ({
  isMenuOpen: false,
  isContactFormOpen: false,
  isAboutMeCardOpen: false,
  isProjectCardOpen: false,

  setIsMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setIsContactFormOpen: () =>
    set((state) => ({ isContactFormOpen: !state.isContactFormOpen })),
  setIsAboutMeCardOpen: () =>
    set((state) => ({ isAboutMeCardOpen: !state.isAboutMeCardOpen })),
  setIsProjectCardOpen: () =>
    set((state) => ({ isProjectCardOpen: !state.isProjectCardOpen })),
}));

export default useStore;
