'use strict';

describe('Service: blogFactory', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var blogFactory;
  beforeEach(inject(function (_blogFactory_) {
    blogFactory = _blogFactory_;
  }));

  it('should do something', function () {
    expect(!!blogFactory).toBe(true);
  });

});
