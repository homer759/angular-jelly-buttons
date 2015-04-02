/**
 * Created by nicholas on 4/1/15.
 */

'use strict';

angular.module('jellyButtons', [])
  .directive('jellyButton', function () {
    function beJelly($scope, element){
      //$scope.$apply();
      element.removeClass('animation-target');
      setTimeout(function(){
        element.addClass('animation-target');
      },100);
    }
    function link($scope, element){
      element.on('click', function(){
        element.removeClass('animation-target');
        beJelly($scope, element);
      });
      element.addClass('button');
      element.addClass('r');
    }
    return {
      restrict: 'E',
      link: link
    };
});
