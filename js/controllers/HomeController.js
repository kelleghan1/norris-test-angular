thisApp
.controller('HomeController', [
  'HomeService',
  '$state',
  '$scope',
  function(
    HomeService,
    $state,
    $scope
  ){

    $scope.jokes = [];

    HomeService.getJokes()
    .then(function(res){
      $scope.jokes = res.data.value;
    })

    $scope.refreshJokes = function(firstName , lastName){
      $scope.jokes = [];

      HomeService.refreshJokes(firstName || 'Chuck', lastName || 'Norris')
      .then(function(res){
        $scope.jokes = res.data.value;
      })
    }
  }
])
