'use strict';

/**
 * @ngdoc overview
 * @name amdminsApp
 * @description
 * # amdminsApp
 *
 * Main module of the application.
 */
angular
  .module('amdminsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
  });
