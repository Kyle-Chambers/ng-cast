angular.module('video-player')
  .controller('searchController', ['youTube', function (youTube) {
    this.result = (data) => {
      // this.updateList(data);
      this.videos = data;
    };
    // this.onClick = () => {
    //   youTube.search(this.searchQuery, this.updateList);
    //   // this.updateList(this.searchQuery);  
    // }
  }])
  .component('search', {
    bindings: {
      updateList: '&'
    },
    templateUrl: 'src/templates/search.html',
    controller: 'searchController'
  });
