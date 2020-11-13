import React from "react";

const VideoItem = (props) => {
  return (
    <div
      className="ui segment"
      style={{
        width: "30%",
        position: "relative",
        right: "0px",
        left: "800px",
      }}
    >
      <div class="ui list">
        <div class="item">
          Video Image
          <img class="ui avatar image"></img>
          <div class="content">
            <a class="header">Video Name</a>
            <div class="description">
              <a>
                <b>Channel name</b>
              </a>
              Views, Publish time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
