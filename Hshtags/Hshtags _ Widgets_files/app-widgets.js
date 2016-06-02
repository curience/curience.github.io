'use strict';


// Declare profile level module which depends on filters, and services
var widgets = angular.module('widgets', [
  'ngRoute',
  'ngResource',
  'hshtags',
  'main.controllers',
  'widget.directives'
]);

// routes
widgets.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/webroot/ng-views/widgets/index.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true).hashPrefix('');
}]);

