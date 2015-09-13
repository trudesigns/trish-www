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

    var ctrl = this;
    var document = $document[0];
    var anchorElement = document.getElementById('beginIsScrolledDown');
    var navElement = document.getElementById('navbar');

    function _init () {
      angular.element($window).bind('scroll', _onScroll);
      _setIsScrolledDown();
    }

    function _setIsScrolledDown () {
      if (anchorElement.getBoundingClientRect().top < 0) {
        ctrl.isScrolledDown = true;
      } else {
        ctrl.isScrolledDown = false;
        ctrl.isCollapsed = true;
      }
    }

    function _onScroll () {
      _setIsScrolledDown();
      toggleNav(true);
      $scope.$digest();
    }

    function toggleNav (collapse) {
      ctrl.isCollapsed = collapse || !ctrl.isCollapsed;
    }

    function scrollToTop () {
      document.scrollTop(0, 500).then(function () {
        // do something...
      });
    }

    angular.extend(ctrl, {
      isCollapsed : true,
      isScrolledDown : null,
      toggleNav: toggleNav,
      scrollToTop : scrollToTop
    });

    _init();

  });
