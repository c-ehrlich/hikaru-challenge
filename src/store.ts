import create from "zustand";
import { getCurrentVideoIndexFromLocalStorage, setCurrentVideoIndex } from "./utils";

interface HikaruState {
  videoIndex: number;
  setVideoIndex: (index: number) => void;
}

const useStore = create<HikaruState>(set => ({
  videoIndex: getCurrentVideoIndexFromLocalStorage(),
  setVideoIndex: (index: number) => set({videoIndex: setCurrentVideoIndex(index)}),
}))

export default useStore;