'use strict';

describe('Service: changeOrCreateTask', function () {

  // load the service's module
  beforeEach(module('amdminsApp'));

  // instantiate service
  var changeOrCreateTask;
  beforeEach(inject(function (_changeOrCreateTask_) {
    changeOrCreateTask = _changeOrCreateTask_;
  }));

  it('should do something', function () {
    expect(!!changeOrCreateTask).toBe(true);
  });

});
