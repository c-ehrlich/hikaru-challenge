export const getCurrentVideoIndexFromLocalStorage = (): number => {
  const localStorageValue: string | null = localStorage.getItem("hikaru-index");
  if (localStorageValue === null) {
    return 1
  } else {
    return parseInt(localStorageValue);
  }
}

export const setCurrentVideoIndex = (videoIndex: number): number => {
  localStorage.setItem('hikaru-index', videoIndex.toString());
  return videoIndex;
}