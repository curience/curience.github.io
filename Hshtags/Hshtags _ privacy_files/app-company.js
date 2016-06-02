'use strict';


// Declare profile level module which depends on filters, and services
var company = angular.module('company', [
  'ngRoute',
  'ngResource',
  'hshtags',
  'main.controllers',
  'general.controllers'
]);

// routes
company.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/faqs', {
    templateUrl: '/webroot/ng-views/company/faqs.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/privacy', {
    templateUrl: '/webroot/ng-views/company/privacy.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/press', {
    templateUrl: '/webroot/ng-views/company/press.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.when('/terms', {
    templateUrl: '/webroot/ng-views/company/terms.php',
    resolve: {
    'loggedInUserData':function(loggedInUser){
      return loggedInUser.info;
    }
  }});
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true).hashPrefix('');
}]);

