'use strict';

describe('Service: snippetFactory', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var snippetFactory;
  beforeEach(inject(function (_snippetFactory_) {
    snippetFactory = _snippetFactory_;
  }));

  it('should do something', function () {
    expect(!!snippetFactory).toBe(true);
  });

});
