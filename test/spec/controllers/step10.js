'use strict';

describe('Controller: Step10Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step10Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step10Ctrl = $controller('Step10Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step10Ctrl.awesomeThings.length).toBe(3);
  });
});
