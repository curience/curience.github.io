'use strict';


// Declare profile level module which depends on filters, and services
var contact = angular.module('contact', [
  'ngRoute',
  'ngResource',
  'hshtags',
  'main.controllers',
  'general.controllers',
  'contact.directives'
]);

// routes
contact.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/webroot/ng-views/contact/index.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/thanks', {
    templateUrl: '/webroot/ng-views/contact/thanks.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true).hashPrefix('');
}]);

