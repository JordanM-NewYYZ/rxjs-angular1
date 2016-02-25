'use strict';

describe('Controller: Step7Ctrl', function () {

  // load the controller's module
  beforeEach(module('rxExampleApp'));

  var Step7Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Step7Ctrl = $controller('Step7Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Step7Ctrl.awesomeThings.length).toBe(3);
  });
});
