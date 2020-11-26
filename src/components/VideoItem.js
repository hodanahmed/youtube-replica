import React from "react";

const VideoItem = ({ channelName, videoTitle, videoImage }) => {

  return (
    <div className="item">
      <img className="ui medium image" src={videoImage}></img>
      <div className="content">
        <a className="header">{videoTitle}</a>
        <div className="description">
          <a>
            <b>
              {channelName}</b>
          </a>
          Views, Publish time
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
