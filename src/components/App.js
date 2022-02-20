import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import onVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideos] = useState(null);
  const [videos, search] = onVideos('Pretty Afra');

  useEffect(() => {
    setSelectedVideos(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList selectedVideo={setSelectedVideos} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
