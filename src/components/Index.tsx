import useStore from "../store"
import styled from "styled-components";
import hikaru from "../hikaru.json"

const StyledIndex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Index = () => {
  const videoIndex = useStore(state => state.videoIndex);
  const setVideoIndex = useStore(state => state.setVideoIndex)

  return (
    <StyledIndex>
      <button onClick={() => {setVideoIndex(videoIndex-1)}}>Previous</button>
      <div>{videoIndex}/{hikaru.length}</div>
      <button onClick={() => {setVideoIndex(videoIndex+1)}}>Next</button>
    </StyledIndex>
  )
}

export default Index
