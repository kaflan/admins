'use strict';

describe('Service: testconnect', function () {

  // load the service's module
  beforeEach(module('amdminsApp'));

  // instantiate service
  var testconnect;
  beforeEach(inject(function (_testconnect_) {
    testconnect = _testconnect_;
  }));

  it('should do something', function () {
    expect(!!testconnect).toBe(true);
  });

});
