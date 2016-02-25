'use strict';

/**
 * @ngdoc overview
 * @name rxExampleApp
 * @description
 * # rxExampleApp
 *
 * Main module of the application.
 */
angular
  .module('rxExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/step2', {
        templateUrl: 'views/step2.html',
        controller: 'Step2Ctrl',
        controllerAs: 'step2'
      })
      .when('/step3', {
        templateUrl: 'views/step3.html',
        controller: 'Step3Ctrl',
        controllerAs: 'step3'
      })
      .when('/step4', {
        templateUrl: 'views/step4.html',
        controller: 'Step4Ctrl',
        controllerAs: 'step4'
      })
      .when('/step5', {
        templateUrl: 'views/step5.html',
        controller: 'Step5Ctrl',
        controllerAs: 'step5'
      })
      .when('/step6', {
        templateUrl: 'views/step6.html',
        controller: 'Step6Ctrl',
        controllerAs: 'step6'
      })
      .when('/step7', {
        templateUrl: 'views/step7.html',
        controller: 'Step7Ctrl',
        controllerAs: 'step7'
      })
      .when('/step8', {
        templateUrl: 'views/step8.html',
        controller: 'Step8Ctrl',
        controllerAs: 'step8'
      })
      .when('/step9', {
        templateUrl: 'views/step9.html',
        controller: 'Step9Ctrl',
        controllerAs: 'step9'
      })
      .when('/step10', {
        templateUrl: 'views/step10.html',
        controller: 'Step10Ctrl',
        controllerAs: 'step10'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
