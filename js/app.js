var thisApp = angular.module('NorrisApp', [
  'ui.router',
  'ngAnimate',
])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
})
