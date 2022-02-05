import axios from 'axios';

const KEY = 'AIzaSyAyL_8f8vztfUNtMduqbMBOWx_FR9t38Ag';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
