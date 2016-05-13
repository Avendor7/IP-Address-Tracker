'use strict';

describe('Controller: SnippetsCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var SnippetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SnippetsCtrl = $controller('SnippetsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SnippetsCtrl.awesomeThings.length).toBe(3);
  });
});
