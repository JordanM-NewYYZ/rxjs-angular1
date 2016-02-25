'use strict';

describe('Controller: Step9Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step9Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step9Ctrl = $controller('Step9Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step9Ctrl.awesomeThings.length).toBe(3);
  });
});
