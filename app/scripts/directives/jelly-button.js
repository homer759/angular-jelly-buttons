//'use strict';
//
///**
// * @ngdoc directive
// * @name angularJellyButtonsApp.directive:jellyButton
// * @description
// * # jellyButton
// */
//angular.module('angularJellyButtonsApp')
//  .directive('jellyButton', function () {
//    function beJelly($scope, element){
//      //$scope.$apply();
//      element.removeClass("animation-target");
//      setTimeout(function(){
//        element.addClass("animation-target");
//      },100);
//    }
//    function link($scope, element, attrs){
//      element.on("click", function(){
//        element.removeClass("animation-target");
//        beJelly($scope, element)
//      });
//      element.addClass("button");
//      element.addClass("r");
//    }
//    return {
//      restrict: 'E',
//      link: link
//    };
//  });
