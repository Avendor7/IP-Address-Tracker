'use strict';

describe('Service: Constants', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var myConstants;
  beforeEach(inject(function (_myConstants_) {
    myConstants = _myConstants_;
  }));

  it('should do something', function () {
    expect(!!myConstants).toBe(true);
  });

});
