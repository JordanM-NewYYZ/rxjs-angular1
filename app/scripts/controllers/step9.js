'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step9Ctrl
 * @description
 * # Step9Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step9Ctrl', function($http, $q) {
    var vm = this;
    vm.suggestion1 = '';

    vm.refreshButton = angular.element('.refresh');
    vm.refreshClickStream = Rx.Observable.fromEvent(vm.refreshButton, 'click');

    vm.closeButton1 = angular.element('.close');
    vm.close1ClickStream = Rx.Observable.fromEvent(vm.closeButton1, 'click');

    vm.requestStream = vm.refreshClickStream.startWith('startup click').map(function() {
      var randomOffset = Math.floor(Math.random() * 500);
      return 'https://api.github.com/users?since=' + randomOffset;
    });

    vm.responseStream = vm.requestStream.flatMap(function(requestUrl) {
      return Rx.Observable.fromPromise($http.get(requestUrl).then(function(res) {
        return $q.resolve(res.data);
      }));
    });

    vm.suggestion1Stream = vm.close1ClickStream.startWith('startup click')
      .combineLatest(vm.responseStream,
        function(click, listUsers) {
          return listUsers[Math.floor(Math.random() * listUsers.length)];
        }
      )
      .merge(
        vm.refreshClickStream.map(function() {
          return null;
        })
      )
      .startWith(null);

    vm.suggestion1Stream.subscribe(function(suggestion) {
      vm.suggestion1 = suggestion;
    });
  });
