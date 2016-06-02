'use strict';


// Declare profile level module which depends on filters, and services
var embed = angular.module('embed', [
  'ngRoute',
  'ngResource',
  'hshtags',
  'main.controllers',
  'embed.controllers',
  'post.directives',
  'post.services'
]);

// routes
embed.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/tag/:tag', {
    templateUrl: '/webroot/ng-views/widgets/embed-tags.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true).hashPrefix('');
}]);

