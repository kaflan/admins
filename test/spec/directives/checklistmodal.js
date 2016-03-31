'use strict';

describe('Directive: checkListModal', function () {

  // load the directive's module
  beforeEach(module('amdminsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<check-list-modal></check-list-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkListModal directive');
  }));
});
