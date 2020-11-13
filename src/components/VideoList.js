import React from "react";
import VideoItem from "./VideoItem";
const VideoList = (props) => {
    
  const mapVideos = () => {
    let videoList = props.videoList;
      videoList.map((videos) => {
        //   const video = <VideoItem info={"this is info"} />
        //   return video
    });
  };
  return !props.videoList ? (
    <div></div>
  ) : (
    <div
      className="ui segment"
      style={{
        width: "30%",
        position: "absolute",
        right: "0px"
      }}
    >
              <div className="ui list">{mapVideos()}</div>
              
    </div>
  );
};

export default VideoList;
