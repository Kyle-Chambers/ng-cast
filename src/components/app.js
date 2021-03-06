angular.module('video-player')
  .controller('appController', ['$sce', 'youTube', function ($sce, youTube) {
    // this.videos = window.exampleVideoData;
    // this.currentVideo = window.exampleVideoData[0];
    

    this.selectVideo = () => {
      
    };
    this.searchResults = () => {
      
    };

    this.update = (search) => {
      youTube.search(search, (data) => {
        this.videos = data;
        this.currentVideo = data[0];
        this.currentLink = 
          $sce.trustAs($sce.RESOURCE_URL, 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId);
      });
    };
    
    this.updateVideoPlayer = (index) => {
      this.currentVideo = this.videos[index];
      this.currentLink = 
        $sce.trustAs($sce.RESOURCE_URL, 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId);
    };

    this.$onInit = () => { 
      youTube.search('javascript', (data) => {
        this.videos = data;
        this.currentVideo = data[0];
        this.currentLink = 
          $sce.trustAs($sce.RESOURCE_URL, 'https://www.youtube.com/embed/' + this.currentVideo.id.videoId);
      });
    };
  }])
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'appController'
  });
