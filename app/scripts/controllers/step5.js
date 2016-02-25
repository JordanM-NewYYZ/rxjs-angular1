'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step5Ctrl
 * @description
 * # Step5Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step5Ctrl', function ($http, $q) {
    var vm = this;
    vm.requestStream = Rx.Observable.just('https://api.github.com/users');

    vm.responseStream = vm.requestStream.flatMap(function (requestUrl) {
      return Rx.Observable.fromPromise($http.get(requestUrl).then(function (res) {
        console.log('Data from promise: ', res.data);
        return $q.resolve(res.data)
      }));
    });

    vm.responseStream.subscribe(function (response) {
      console.log('Response from subscription: ', response);
      // Render response to DOM
    });
  });
