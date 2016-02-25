'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step4Ctrl
 * @description
 * # Step4Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step4Ctrl', function ($http, $q) {
    var vm = this;
    vm.requestStream = Rx.Observable.just('https://api.github.com/users');

    vm.responseMetaStream = vm.requestStream.map(function (requestUrl) {
      return Rx.Observable.fromPromise($http.get(requestUrl).then(function (res) {
        return $q.resolve(res.data)
      }));
    });

  });
