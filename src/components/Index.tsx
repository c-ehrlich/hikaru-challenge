import { SyntheticEvent, useState } from "react";
import useStore from "../store";
import styled from "styled-components";
import hikaru from "../hikaru.json";
import { isNumber } from "../utils";

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Index = () => {
  const videoIndex = useStore((state) => state.videoIndex);
  const setVideoIndex = useStore((state) => state.setVideoIndex);
  const [inputValue, setInputValue] = useState<string>("");

  const handleGoToVideo = (): void => {
    if (isNumber(inputValue)) {
      setVideoIndex(Number(inputValue));
      setInputValue("");
    }
  };

  return (
    <StyledIndex>
      <FlexRow>
        <button
          onClick={() => {
            setVideoIndex(videoIndex - 1);
          }}
        >
          Previous
        </button>
        <div>
          {videoIndex}/{hikaru.length}
        </div>
        <button
          onClick={() => {
            setVideoIndex(videoIndex + 1);
          }}
        >
          Next
        </button>
      </FlexRow>
      <FlexRow>
        <input
          type="number"
          name="index"
          min="1"
          max={hikaru.length}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleGoToVideo}>Go To Video #</button>
      </FlexRow>
    </StyledIndex>
  );
};

export default Index;
