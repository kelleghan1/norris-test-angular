thisApp
.factory('HomeService', function($http){

  return {

    getJokes: function(obj){
      return $http.get('https://api.icndb.com/jokes/random/6')
      .then(
        function(success){
          return success;
        },
        function(error){
          return error;
        }
      );
    },

    refreshJokes: function(firstName, lastName){
      return $http.get('https://api.icndb.com/jokes/random/6?firstName=' + firstName + '&' + 'lastName=' + lastName )
      .then(
        function(success){
          return success;
        },
        function(error){
          return error;
        }
      );
    }

  }
});
