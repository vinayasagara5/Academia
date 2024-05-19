import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`video-player ${playState ? " " : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        src="https://www.youtube.com/watch?v=Giwl0FuHpF8"
        autoPlay
        muted
        controls
      ></video>
    </div>
  );
};
export default VideoPlayer;
