'use strict';

/**
 * @ngdoc function
 * @name angularJellyButtonsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJellyButtonsApp
 */
angular.module('angularJellyButtonsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
