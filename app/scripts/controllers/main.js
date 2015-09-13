 'use strict';

/**
 * @ngdoc function
 * @name trishApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trishApp
 */
angular.module('trishApp')
  .controller('MainCtrl', function ($scope, $document, $window, $timeout) {

    var ctrl = this;
    var document = $document[0];
    var anchorElement = document.getElementById('beginIsScrolledDown');
    var marginElement = document.getElementById('extraMarginTop');
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
      }
    }

    function _updateMargins () {
      if (ctrl.isScrolledDown) {
        angular.element(marginElement).css('margin-top', (navElement.offsetHeight + 20) + 'px');
      } else {
        angular.element(marginElement).css('margin-top', '0px');
      }
    }

    function _onScroll () {
      _setIsScrolledDown();
      _updateMargins();
      $scope.$digest();
    }

    function toggleNav () {
      ctrl.isCollapsed = !ctrl.isCollapsed;
      _setIsScrolledDown();
      $timeout(_updateMargins);
    }

    function scrollToTop () {
      $document.scrollTop(0, 500).then(function () {
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
