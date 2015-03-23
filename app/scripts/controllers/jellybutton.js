'use strict';

/**
 * @ngdoc function
 * @name angularJellyButtonsApp.controller:JellybuttonCtrl
 * @description
 * # JellybuttonCtrl
 * Controller of the angularJellyButtonsApp
 */
angular.module('angularJellyButtonsApp')
  .controller('JellybuttonCtrl', function ($scope) {

//console.log("oi...");
    $scope.animation = "";
    //var touchGesture = $ionicGesture.on('touchmove', touchMove, element);

    $scope.animateIn = function () {
      console.log("oi...");
      $scope.animation = "";
      $scope.$apply();
      $scope.animation = "animation-target";
    };


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
