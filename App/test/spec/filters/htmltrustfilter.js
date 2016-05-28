'use strict';

describe('Filter: htmlTrustFilter', function () {

  // load the filter's module
  beforeEach(module('appApp'));

  // initialize a new instance of the filter before each test
  var htmlTrustFilter;
  beforeEach(inject(function ($filter) {
    htmlTrustFilter = $filter('htmlTrustFilter');
  }));

  it('should return the input prefixed with "htmlTrustFilter filter:"', function () {
    var text = 'angularjs';
    expect(htmlTrustFilter(text)).toBe('htmlTrustFilter filter: ' + text);
  });

});
