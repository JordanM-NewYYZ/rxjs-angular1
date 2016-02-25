'use strict';

/**
 * @ngdoc function
 * @name rxExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rxExampleApp
 */
angular.module('rxExampleApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.requestStream = Rx.Observable.just('https://api.github.com/users');


  });
