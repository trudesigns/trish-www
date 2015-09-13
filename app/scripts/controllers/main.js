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
    var $doc = $document[0];
    var anchorElement = $doc.getElementById('beginIsScrolledDown');
    var navElement = $doc.getElementById('navbar');
    // var $marginElement = angular.element(document.getElementById('extraMarginTop'));

    function _init () {
      angular.element($window).bind('scroll', _onScroll);
      _setIsScrolledDown();
    }

    function _onScroll () {
      _setIsScrolledDown();
      // TODO: Set margin-top equal to navbar height
      //       if scrolling down, then remove it on collapse or scrolling up
      _setAnchorHeight();
      $scope.$digest();
    }

    function _setAnchorHeight () {
      angular.element(anchorElement).css('height', (ctrl.isScrolledDown ? navElement.offsetHeight + 20 : 0) + 'px');
    }

    function _setIsScrolledDown () {
      if (anchorElement.getBoundingClientRect().top > 0) { // If scrolled above the splash-page
        ctrl.isScrolledDown = false;
      } else { // Else scrolled past splash-page
        ctrl.isScrolledDown = true;
      }
    }

    function toggleNav (collapse) {
      ctrl.isCollapsed = collapse || !ctrl.isCollapsed;
    }

    function scrollToTop () {
      $doc.scrollTop(0, 500).then(function () {
        // do something...
      });
    }

    angular.extend(ctrl, {
      isCollapsed: true,
      isScrolledDown: null,
      lastAnchorPosition: null,
      toggleNav: toggleNav,
      scrollToTop : scrollToTop
    });

    _init();

  });
