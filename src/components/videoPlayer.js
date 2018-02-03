angular.module('video-player')
.component('videoPlayer', {
  bindings: {
    video: '<',
    link: '<'
  },
  templateUrl: "src/templates/videoPlayer.html"
});
