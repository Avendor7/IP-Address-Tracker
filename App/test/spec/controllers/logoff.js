'use strict';

describe('Controller: LogoffCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var LogoffCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoffCtrl = $controller('LogoffCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LogoffCtrl.awesomeThings.length).toBe(3);
  });
});
