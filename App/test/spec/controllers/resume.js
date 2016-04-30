'use strict';

describe('Controller: ResumeCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ResumeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumeCtrl = $controller('ResumeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResumeCtrl.awesomeThings.length).toBe(3);
  });
});
