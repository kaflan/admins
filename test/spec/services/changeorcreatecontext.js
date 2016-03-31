'use strict';

describe('Service: changeOrCreateContext', function () {

  // load the service's module
  beforeEach(module('amdminsApp'));

  // instantiate service
  var changeOrCreateContext;
  beforeEach(inject(function (_changeOrCreateContext_) {
    changeOrCreateContext = _changeOrCreateContext_;
  }));

  it('should do something', function () {
    expect(!!changeOrCreateContext).toBe(true);
  });

});
