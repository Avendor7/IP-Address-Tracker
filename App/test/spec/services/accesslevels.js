'use strict';

describe('Service: AccessLevels', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var AccessLevels;
  beforeEach(inject(function (_AccessLevels_) {
    AccessLevels = _AccessLevels_;
  }));

  it('should do something', function () {
    expect(!!AccessLevels).toBe(true);
  });

});
