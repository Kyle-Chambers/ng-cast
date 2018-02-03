angular.module('video-player')
.controller('videoListController', function (){
  this.videos = window.exampleVideoData;
})
.component('videoList', {
  bindings: {
    videos: '<'
  },
  templateUrl: 'src/templates/videoList.html',
  controller: 'videoListController'
});
