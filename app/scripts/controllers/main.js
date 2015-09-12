'use strict';

/**
 * @ngdoc function
 * @name trishApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trishApp
 */
angular.module('trishApp')
  .controller('MainCtrl', function ($scope, $document, $window) {

    $scope.nav = {
      isCollapsed : true,
      isScrolledDown : null,
      scrollToTop : function () {
        console.log('asd');
        $document.scrollTop(0, 500).then(function () {
          // do something...
        });
      }
    };

    var anchorElement = $document[0].getElementById('beginIsScrolledDown');

    angular.element($window).bind('scroll', function () {
      if (anchorElement.getBoundingClientRect().top < 1) {
        $scope.nav.isScrolledDown = true;
      } else {
        $scope.nav.isScrolledDown = false;
      }
      $scope.$apply();
    });

  });
