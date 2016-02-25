'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step7Ctrl
 * @description
 * # Step7Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step7Ctrl', function ($http) {
    var vm = this;

    vm.refreshButton = angular.element('.refresh');
    vm.refreshClickStream = Rx.Observable.fromEvent(vm.refreshButton, 'click');

    vm.startupRequestStream = Rx.Observable.just('https://api.github.com/users');

    vm.requestStream = vm.refreshClickStream.map(function () {
        var randomOffset = Math.floor(Math.random() * 500);
        return 'https://api.github.com/users?since=' + randomOffset;
      });
    //   // .merge(Rx.Observable.just('https://api.github.com/users'));
    //   .startWith('https://api.github.com/users');

    // vm.requestStream = vm.refreshClickStream.startWith('startup click').map(function () {
    //   var randomOffset = Math.floor(Math.random() * 500);
    //   return 'https://api.github.com/users?since=' + randomOffset;
    // });

    vm.responseStream = vm.requestStream.flatMap(function (requestUrl) {
      return Rx.Observable.fromPromise($http.get(requestUrl));
    });

    vm.responseStream.subscribe(function (response) {
      // Render response to DOM
    });
  });
