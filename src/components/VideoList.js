import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, selectedVideo }) => {
  const renderedList = videos.map(video => {
    return <VideoItem selectedVideo={selectedVideo} video={video} />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
