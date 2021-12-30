import hikaru from "./hikaru.json";

const numberOfVideos = hikaru.length + 1;

export const getCurrentVideoIndexFromLocalStorage = (): number => {
  const localStorageValue: string | null = localStorage.getItem("hikaru-index");
  if (localStorageValue === null) {
    return 1
  } else {
    return parseInt(localStorageValue);
  }
}

export const setCurrentVideoIndex = (newIndex: number, currentIndex: number): number => {
  if (newIndex < 1 || newIndex > numberOfVideos) return currentIndex;
  
  localStorage.setItem('hikaru-index', newIndex.toString());
  return newIndex;
}