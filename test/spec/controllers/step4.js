'use strict';

describe('Controller: Step4Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step4Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step4Ctrl = $controller('Step4Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step4Ctrl.awesomeThings.length).toBe(3);
  });
});
