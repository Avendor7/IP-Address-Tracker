'use strict';

describe('Controller: PostCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var PostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostCtrl = $controller('PostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PostCtrl.awesomeThings.length).toBe(3);
  });
});
