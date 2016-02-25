'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step6Ctrl
 * @description
 * # Step6Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step6Ctrl', function ($http) {
    var vm = this;
    vm.requestStream = Rx.Observable.just('https://api.github.com/users');
    vm.refreshButton = angular.element('.refresh');
    vm.refreshClickStream = Rx.Observable.fromEvent(vm.refreshButton, 'click');


    vm.requestStream = vm.refreshClickStream.map(function () {
      var randomOffset = Math.floor(Math.random() * 500);
      return 'https://api.github.com/users?since=' + randomOffset;
    });

    vm.responseStream = vm.requestStream.flatMap(function (requestUrl) {
      return Rx.Observable.fromPromise($http.get(requestUrl));
    });

    vm.responseStream.subscribe(function (response) {
      // Render response to DOM
    });
  });
