'use strict';

describe('Controller: ViewsnippetsCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ViewsnippetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewsnippetsCtrl = $controller('ViewsnippetsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewsnippetsCtrl.awesomeThings.length).toBe(3);
  });
});
