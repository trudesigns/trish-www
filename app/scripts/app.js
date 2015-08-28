'use strict';

/**
 * @ngdoc overview
 * @name trishWwwApp
 * @description
 * # trishWwwApp
 *
 * Main module of the application.
 */
angular
  .module('trishWwwApp', [
    'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
