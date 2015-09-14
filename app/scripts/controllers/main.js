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
    var _currentAnchorOffset;
    var _previousAnchorOffset;
    var anchorElement = document.getElementById('anchorBeginIsScrolledDown');
    var navElement = document.getElementById('navbar');
    // var $marginElement = angular.element(document.getElementById('extraMarginTop'));

    function _init () {
      angular.element($window).bind('scroll', _onScroll);
      _setIsScrolledDown();
    }

    function _onScroll () {
      $scope.$evalAsync(function () {
        _setIsScrolledDown();
      });
    }

    /**
     * For when scrolling down past navbar while it's open in mobile view.
     */
    function _setAnchorMarginBottom (newValue) {
      angular.element(anchorElement).css('margin-bottom', (newValue ? newValue : ctrl.isScrolledDown ? navElement.offsetHeight + 20 : 0) + 'px');
    }

    function _setIsScrolledDown () {
      _currentAnchorOffset = anchorElement.getBoundingClientRect().top;
      if (_currentAnchorOffset > 0) { // If scrolled above the splash-page
        ctrl.isScrolledDown = false;
      } else { // Else is scrolled past splash-page
        ctrl.isScrolledDown = true;
      }
      if (ctrl.isScrolledDown && _currentAnchorOffset > _previousAnchorOffset) { // If scrolled down and scrolling downwards
        _setAnchorMarginBottom();
      } else {
        _setAnchorMarginBottom(0);
      }
      _previousAnchorOffset = _currentAnchorOffset;
    }

    function toggleNav (collapse) {
      $timeout(_setAnchorMarginBottom, 10);
      ctrl.isCollapsed = collapse || !ctrl.isCollapsed;
    }

    function scrollToTop () {
      $document.scrollTop(0, 500).then(function () {
        // do something...
      });
    }

    angular.extend(ctrl, {
      isCollapsed: true,
      isScrolledDown: null,
      toggleNav: toggleNav,
      scrollToTop : scrollToTop
    });

    _init();

  });
