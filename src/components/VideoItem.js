import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item">
      <img className="ui avatar image" src={props.videoImage}></img>
      <div className="content">
        <a className="header">{props.videoName}</a>
        <div className="description">
          <a>
            <b>{props.videoChannelName}</b>
          </a>
          {props.videoDescription}
          Views, Publish time
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
