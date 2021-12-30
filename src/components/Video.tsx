import { useEffect, useState } from "react";
import styled from "styled-components";
import useStore from "../store";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import hikaru from "../hikaru.json";

const FlexColumnNoGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const EmbedContainer = styled.div`
  &.w480 { width: 480px; }
  &.w720 { width: 720px; }
  &.w1280 { width: 1280px; }
  &.w1920 { width: 1920px; }
  &.w2560 { width: 2560px; }
`;

const Video = () => {
  const [videoId, setVideoId] = useState<string>("");
  const videoIndex = useStore((state) => state.videoIndex);
  const [haveValidVideo, setHaveValidVideo] = useState<boolean>(false);
  const [playerClass, setPlayerClass] = useState<string>("w720");

  useEffect(() => {
    const video = hikaru.find((video) => video.index === videoIndex);
    if (video) {
      setHaveValidVideo(true);
      setVideoId(video.id);
    } else {
      setHaveValidVideo(false);
    }
  }, [videoIndex]);

  return (
    <StyledVideo>
      {haveValidVideo && (
        <>
          <FlexColumnNoGap>
            <div>video width</div>
            <ButtonRow>
              <button onClick={() => setPlayerClass("w480")}>480px</button>
              <button onClick={() => setPlayerClass("w720")}>720px</button>
              <button onClick={() => setPlayerClass("w1280")}>1280px</button>
              <button onClick={() => setPlayerClass("w1920")}>1920px</button>
              <button onClick={() => setPlayerClass("w2560")}>2560px</button>
            </ButtonRow>
          </FlexColumnNoGap>
          <EmbedContainer className={playerClass}>
            <LiteYouTubeEmbed
              id={videoId} // Default none, id of the video or playlist
              poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
              title="YouTube Embed of a Hikaru Video being watched by a Great Human Being (you)" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
              noCookie={false} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
            />
          </EmbedContainer>
          <a
            href={`https://youtu.be/${videoId}`}
          >{`https://youtu.be/${videoId}`}</a>
        </>
      )}
    </StyledVideo>
  );
};

export default Video;
