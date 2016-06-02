'use strict';


// Declare profile level module which depends on filters, and services
var about = angular.module('about', [
  'ngRoute',
  'ngResource',
  'hshtags',
  'main.controllers',
  'general.controllers'
]);

// routes
about.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/webroot/ng-views/about/home.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/company', {
    templateUrl: '/webroot/ng-views/about/company.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/plans', {
    templateUrl: '/webroot/ng-views/about/plans.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/how-tos', {
    templateUrl: '/webroot/ng-views/about/howtos.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/privacy', {
    templateUrl: '/webroot/ng-views/about/privacy.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/press', {
    templateUrl: '/webroot/ng-views/about/press.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/terms', {
    templateUrl: '/webroot/ng-views/about/terms.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true).hashPrefix('');
}]);

