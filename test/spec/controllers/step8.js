'use strict';

describe('Controller: Step8Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step8Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step8Ctrl = $controller('Step8Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step8Ctrl.awesomeThings.length).toBe(3);
  });
});
