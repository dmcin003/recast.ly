import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});
'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    // eslint-disable-next-line camelcase
    data: {youtube_api_key: YOUTUBE_API_KEY,
      q: query
    },
    contentType: 'application/json',
    success: (items) =>{
      if (callback) {
        callback(items);
      }
    },
    error: (err) =>{ console.error('Youtube failed to get data'); }

  });
};
export default searchYouTube;
