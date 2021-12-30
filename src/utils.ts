import hikaru from "./hikaru.json";

const numberOfVideos = hikaru.length + 1;

export const getCurrentVideoIndexFromLocalStorage = (): number => {
  const localStorageValue: string | null = localStorage.getItem("hikaru-index");
  if (localStorageValue === null) {
    return 1;
  } else {
    return parseInt(localStorageValue);
  }
};

export const setCurrentVideoIndex = (
  newIndex: number,
  currentIndex: number
): number => {
  if (newIndex < 1 || newIndex > numberOfVideos) return currentIndex;

  localStorage.setItem("hikaru-index", newIndex.toString());
  return newIndex;
};

export const getIndexFromVideoId = (videoId: string | undefined): number | undefined=> {
  if (videoId === undefined) return undefined;
  
  const videoIndex = hikaru.find(video => video.id === videoId)
  if (videoIndex !== undefined) return videoIndex.index;
  return undefined;
};

export const getVideoIdFromUrl = (url: string): string | undefined => {
  var regExp =
    // eslint-disable-next-line no-useless-escape
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return undefined;
  }
};
