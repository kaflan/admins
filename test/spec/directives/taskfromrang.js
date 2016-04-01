'use strict';

describe('Directive: taskFromRang', function () {

  // load the directive's module
  beforeEach(module('amdminsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task-from-rang></task-from-rang>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the taskFromRang directive');
  }));
});
