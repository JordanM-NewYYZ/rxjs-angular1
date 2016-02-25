'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step8Ctrl
 * @description
 * # Step8Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step8Ctrl', function ($http) {
    var vm = this;
    vm.refreshButton = angular.element('.refresh');
    vm.refreshClickStream = Rx.Observable.fromEvent(vm.refreshButton, 'click');

    vm.requestStream = vm.refreshClickStream.startWith('startup click').map(function () {
      var randomOffset = Math.floor(Math.random() * 500);
      return 'https://api.github.com/users?since=' + randomOffset;
    });
    
    vm.responseStream = vm.requestStream.flatMap(function (requestUrl) {
      return Rx.Observable.fromPromise($http.get(requestUrl));
    });

    vm.suggestion1Stream = vm.responseStream
      .map(function (listUsers) {
        // get one random user from the list
        return listUsers[Math.floor(Math.random() * listUsers.length)];
      })
      .merge(
        vm.refreshClickStream.map(function () {
          return null;
        })
      )
      .startWith(null);

    vm.suggestion1Stream.subscribe(function (suggestion) {
      if (suggestion === null) {
        // hide the first suggestion DOM element
      } else {
        // show the first suggestion DOM element
        // and render the data
      }
    });


  });
