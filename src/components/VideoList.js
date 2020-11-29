import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videoList }) => {
  const renderedList = videoList.map((video) => {
        return <VideoItem channelName={video.snippet.channelTitle} videoImage={video.snippet.thumbnails.medium.url} publishedTime={video.snippet.publishedAt}
        videoTitle={video.snippet.title} link={`https://youtube.com/watch?v=${video.id}`} />
    });
    // return <div>{renderedList}</div>
  return ( <div
        className="ui segment"
        style={{
          width: "30%",
          position: "absolute",
          right: "0px"
        }}
      >
          <div className="ui list">
            
        </div>
        {renderedList}
      </div>)

}
export default VideoList;