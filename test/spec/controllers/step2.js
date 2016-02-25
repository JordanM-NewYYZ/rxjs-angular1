'use strict';

describe('Controller: Step2Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step2Ctrl = $controller('Step2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step2Ctrl.awesomeThings.length).toBe(3);
  });
});
