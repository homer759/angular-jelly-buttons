'use strict';

describe('Directive: jellyButton', function () {

  // load the directive's module
  beforeEach(module('angularJellyButtonsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jelly-button></jelly-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jellyButton directive');
  }));
});
