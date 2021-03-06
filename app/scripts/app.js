'use strict';

/**
 * @ngdoc overview
 * @name runewordsApp
 * @description
 * # runewordsApp
 *
 * Main module of the application.
 */
angular
  .module('runewordsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/runewords.html',
        controller: 'RunewordsCtrl',
        controllerAs: 'runewords'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
