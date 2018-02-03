angular.module('video-player')
.service('youTube', function($http){

  return {
   search: function (query, cb){
      var ytSearch = 
        'https://www.googleapis.com/youtube/v3/search?part=snippet&type=videos&q=' +
        query + '&key=' + window.YOUTUBE_API_KEY;
    
      $http({ method: 'GET', url: ytSearch }).then((data) => {
        cb(data.data.items);
      }, (err) => console.log(err));
      // cb(data);
    }
  };
});
