'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step2Ctrl
 * @description
 * # Step2Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step2Ctrl', function ($http) {
    var vm = this;
    vm.requestStream = Rx.Observable.just('https://api.github.com/users');
    vm.result = '';

    vm.requestStream.subscribe(function (requestUrl) {
      // execute the request
      $http.get(requestUrl).success(function (data) {
        vm.result = data;
      });
    });

  });
