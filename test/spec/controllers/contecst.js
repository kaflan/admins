'use strict';

describe('Controller: ContecstCtrl', function () {

  // load the controller's module
  beforeEach(module('amdminsApp'));

  var ContecstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContecstCtrl = $controller('ContecstCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContecstCtrl.awesomeThings.length).toBe(3);
  });
});
