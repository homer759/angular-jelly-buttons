'use strict';

/**
 * @ngdoc overview
 * @name angularJellyButtonsApp
 * @description
 * # angularJellyButtonsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJellyButtonsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'jellyButtons'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
