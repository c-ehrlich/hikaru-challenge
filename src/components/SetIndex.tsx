import useStore from "../store";
import { SyntheticEvent, useState } from "react";
import { getIndexFromVideoId, getVideoIdFromUrl } from "../utils";

const SetIndex = () => {
  const [searchIndex, setSearchIndex] = useState<number | undefined>(undefined);
  const [searchBar, setSearchBar] = useState<string>("");

  const setVideoIndex = useStore((state) => state.setVideoIndex);

  const handleInputURL = (e: SyntheticEvent): void => {
    const target = e.target as HTMLTextAreaElement;
    console.log(target.value);
    setSearchBar(target.value);
    setSearchIndex(getIndexFromVideoId(getVideoIdFromUrl(target.value)));
  };

  const handleSetIndex = (): void => {
    if (typeof searchIndex === 'number') setVideoIndex(searchIndex);
    setSearchIndex(undefined);
    setSearchBar("");
  };

  return (
    <div>
      <input value={searchBar} onChange={handleInputURL} />
      {searchIndex && <button onClick={handleSetIndex}>{`Set index to ${searchIndex}`}</button>}
      <div>
        If you don't know your current index, paste a Hikaru video URL in here
        and it will be calculated
      </div>
    </div>
  );
};

export default SetIndex;
