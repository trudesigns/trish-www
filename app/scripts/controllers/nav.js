'use strict';

/**
 * @ngdoc function
 * @name app.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('NavCtrl', function ($scope, $location) {

    $scope.isCollapsed = true;

    $scope.location = $location;

    $scope.goTo = function (path) {
      $location.path(path);
      $scope.isCollapsed = true;
    };

    $scope.$watch('location.path()', function (newPath) {
      $scope.path = newPath;
      try {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      } catch (e) {}
    });

  });
