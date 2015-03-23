'use strict';

/**
 * @ngdoc directive
 * @name angularJellyButtonsApp.directive:jellyButton
 * @description
 * # jellyButton
 */
angular.module('angularJellyButtonsApp')
  .directive('jellyButton', function () {
    return {
      templateUrl: '../views/jelly-button.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the jellyButton directive');
      }
    };
  });
