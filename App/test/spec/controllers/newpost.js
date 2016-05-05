'use strict';

describe('Controller: NewpostCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var NewpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewpostCtrl = $controller('NewpostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewpostCtrl.awesomeThings.length).toBe(3);
  });
});
