'use strict';

describe('Controller: TaskpaternsCtrl', function () {

  // load the controller's module
  beforeEach(module('amdminsApp'));

  var TaskpaternsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskpaternsCtrl = $controller('TaskpaternsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TaskpaternsCtrl.awesomeThings.length).toBe(3);
  });
});
