import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, selectedVideo }) => {
  return (
    <div className="ui relaxed divided list">
      <div onClick={() => selectedVideo(video)} className="video-item item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
