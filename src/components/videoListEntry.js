angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    index: '<',
    updateVideoPlayer: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
