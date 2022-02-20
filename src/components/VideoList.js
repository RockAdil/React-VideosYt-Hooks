import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVideo }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        selectedVideo={selectedVideo}
        video={video}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
