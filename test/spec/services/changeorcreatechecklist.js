'use strict';

describe('Service: changeOrCreateChecklist', function () {

  // load the service's module
  beforeEach(module('amdminsApp'));

  // instantiate service
  var changeOrCreateChecklist;
  beforeEach(inject(function (_changeOrCreateChecklist_) {
    changeOrCreateChecklist = _changeOrCreateChecklist_;
  }));

  it('should do something', function () {
    expect(!!changeOrCreateChecklist).toBe(true);
  });

});
