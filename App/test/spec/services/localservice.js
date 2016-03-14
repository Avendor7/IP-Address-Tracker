'use strict';

describe('Service: localService', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var localService;
  beforeEach(inject(function (_localService_) {
    localService = _localService_;
  }));

  it('should do something', function () {
    expect(!!localService).toBe(true);
  });

});
