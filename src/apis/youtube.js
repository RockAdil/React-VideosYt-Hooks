import axios from 'axios';

const KEY = 'AIzaSyAieuOSVXCYVwEI_BX8W6_7P68EqLgSHRA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
