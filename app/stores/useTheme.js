import { create } from "zustand";

const useTheme = create((set) => ({
  theme: "forest",
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  changeTheme: () =>
    set((state) => ({ theme: state.theme == "forest" ? "light" : "forest" })),
}));
export default useTheme;
