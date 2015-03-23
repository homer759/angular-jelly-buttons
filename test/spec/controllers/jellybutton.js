'use strict';

describe('Controller: JellybuttonCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJellyButtonsApp'));

  var JellybuttonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JellybuttonCtrl = $controller('JellybuttonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
