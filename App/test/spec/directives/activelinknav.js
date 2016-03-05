'use strict';

describe('Directive: activeLinkNav', function () {

  // load the directive's module
  beforeEach(module('appApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<active-link-nav></active-link-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the activeLinkNav directive');
  }));
});
