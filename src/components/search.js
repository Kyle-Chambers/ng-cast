angular.module('video-player')
.controller('searchController', ['youTube', function (youTube){
  this.result = (data) => {
    console.log(data);
  };
  this.onClick = () => {
    youTube.search(this.searchQuery, this.result);  
  }
}])
.component('search', {
  templateUrl: "src/templates/search.html",
  controller: 'searchController'
});
