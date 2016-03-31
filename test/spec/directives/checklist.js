'use strict';

describe('Directive: checkList', function () {

  // load the directive's module
  beforeEach(module('amdminsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<check-list></check-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkList directive');
  }));
});
