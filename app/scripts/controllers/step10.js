'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:Step10Ctrl
 * @description
 * # Step10Ctrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('Step10Ctrl', function($http, $q, $scope) {
    var vm = this;
    vm.loaded = false;
    vm.suggestion1 = '';
    vm.suggestion2 = '';
    vm.suggestion3 = '';

    vm.refreshButton = angular.element('.refresh');
    vm.refreshClickStream = Rx.Observable.fromEvent(vm.refreshButton, 'click');

    vm.closeButton1 = angular.element('.close1');
    vm.close1ClickStream = Rx.Observable.fromEvent(vm.closeButton1, 'click');
    vm.closeButton2 = angular.element('.close2');
    vm.close2ClickStream = Rx.Observable.fromEvent(vm.closeButton2, 'click');
    vm.closeButton3 = angular.element('.close3');
    vm.close3ClickStream = Rx.Observable.fromEvent(vm.closeButton3, 'click');

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
      if (vm.loaded) {
        $scope.$apply();
      }
    });

    vm.suggestion2Stream = vm.close2ClickStream.startWith('startup click')
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

    vm.suggestion2Stream.subscribe(function(suggestion) {
      vm.suggestion2 = suggestion;
      if (vm.loaded) {
        $scope.$apply();
      }
    });

    vm.suggestion3Stream = vm.close3ClickStream.startWith('startup click')
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

    vm.suggestion3Stream.subscribe(function(suggestion) {
      vm.suggestion3 = suggestion;
      if (vm.loaded) {
        $scope.$apply();
      }
      // After initial digest loop, set loaded to true. With Angular 1, must manually run digest loop to update DOM with observables
      // This is redundant but shows how observables work in Angular 1
      vm.loaded = true;
    });
  });
