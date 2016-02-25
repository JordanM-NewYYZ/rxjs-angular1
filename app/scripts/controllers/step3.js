'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step3Ctrl
 * @description
 * # Step3Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step3Ctrl', function ($http) {
    var vm = this;
    vm.requestStream = Rx.Observable.just('https://api.github.com/users');
    vm.newResponse = '';

    vm.requestStream.subscribe(function (requestUrl) {
      // execute the request

      vm.responseStream = Rx.Observable.create(function (observer) {
        $http.get(requestUrl)
          .then(function (response) { //success function
            observer.onNext(response);
          }, function (error) { //error function
            observer.onError(error);
          }, function () { //completed callback
            observer.onCompleted();
          });
      });

      vm.responseStream.subscribe(function (response) {
        // Handle our response
        vm.newResponse = response;
      });
    });

  });
