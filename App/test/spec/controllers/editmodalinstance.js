'use strict';

describe('Controller: EditmodalinstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var EditmodalinstanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditmodalinstanceCtrl = $controller('EditmodalinstanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditmodalinstanceCtrl.awesomeThings.length).toBe(3);
  });
});
