// client/src/components/VideoPlayer.js

import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { addVideoView } from "../utils/api-client";

function VideoPlayer({ video }) {
  const videoRef = React.useRef();

  const { id, url, thumbnail } = video;

  React.useEffect(() => {
    const vjsPlayer = videojs(videoRef.current);

    vjsPlayer.poster(thumbnail);
    vjsPlayer.src(url);

    vjsPlayer.on("ended", () => {
      addVideoView(id);
    });
  }, [id, thumbnail, url]);

  return (
    <div data-vjs-player>
      <video
        controls
        ref={videoRef}
        className="video-js vjs-fluid vjs-big-play-centered"
      ></video>
    </div>
  );
}

export default VideoPlayer;
    