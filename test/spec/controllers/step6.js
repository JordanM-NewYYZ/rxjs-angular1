'use strict';

describe('Controller: Step6Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step6Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step6Ctrl = $controller('Step6Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step6Ctrl.awesomeThings.length).toBe(3);
  });
});
