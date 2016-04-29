'use strict';

describe('Controller: NewmodalinstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var NewmodalinstanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewmodalinstanceCtrl = $controller('NewmodalinstanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewmodalinstanceCtrl.awesomeThings.length).toBe(3);
  });
});
