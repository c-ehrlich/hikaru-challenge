import useStore from "../store"

const Index = () => {
  const videoIndex = useStore(state => state.videoIndex);
  const setVideoIndex = useStore(state => state.setVideoIndex)

  return (
    <div>
      <div>{ videoIndex }</div>
      <button onClick={() => {setVideoIndex(videoIndex+1)}}>+</button>
      <button onClick={() => {setVideoIndex(videoIndex-1)}}>-</button>
    </div>
  )
}

export default Index
