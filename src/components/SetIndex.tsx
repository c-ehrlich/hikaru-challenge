import useStore from "../store";
import styled from "styled-components";
import { SyntheticEvent, useState } from "react";
import { getIndexFromVideoId, getVideoIdFromUrl } from "../utils";

const StyledSetIndex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const SetIndexInput = styled.input`
  width: 300px;
  max-width: 90%;
`;

const CenterText = styled.div`
  text-align: center;
`;

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
    <StyledSetIndex>
      <SetIndexInput value={searchBar} onChange={handleInputURL} />
      {searchIndex && <button onClick={handleSetIndex}>{`Set index to ${searchIndex}`}</button>}
      <CenterText>
        If you don't know your current index, paste a Hikaru video URL in here
        and it will be calculated
      </CenterText>
    </StyledSetIndex>
  );
};

export default SetIndex;
