import React from "react";

const VideoItem = ({ channelName, videoTitle, videoImage, publishedTime }) => {

  const date = new Date(publishedTime);
 let year = date.getFullYear();
  let month = date.getMonth()+1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return (
    <div className="item" style={{ cursor: "pointer", border: "1px grey solid", marginBottom: "10px"}}>
      <img className="ui medium image" src={videoImage}></img>
      <div className="content">
        <a className="header">{videoTitle}</a>
        <div className="description">
          <a>
            <b>
              {channelName}</b>
          </a>
          Published {dt} {month} {year}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
