/* global WOW */

(function () {
  'use strict';

  /**
  * @ngdoc function
  * @name trishApp.controller:MainCtrl
  * @description
  * # MainCtrl
  * Controller of the trishApp
  */
  angular
  .module('trishApp')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl ($scope, $document, $window, $timeout, $uibModal, $log, Contact, Alert) {

    var vm = this;

    var _currentAnchorOffset;
    var _previousAnchorOffset;
    var anchorElement = document.getElementById('anchorBeginIsScrolledDown');
    var navElement = document.getElementById('navbar');

    vm.contact = contact;
    vm.formSent = false;
    vm.isCollapsed = true;
    vm.isScrolledDown = null;
    vm.form = {
      name: null,
      email: null,
      website: null
    };

    vm.openModal = openModal;
    vm.scrollToTop = scrollToTop;
    vm.toggleNav = toggleNav;

    _init();

    function _init () {
      angular.element($window).bind('scroll', _onScroll);
      _setIsScrolledDown();
      new WOW().init();
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
      var marginValue = newValue ? newValue : vm.isScrolledDown ? navElement.offsetHeight + 20 : 0;
      angular.element(anchorElement).css('margin-bottom', (marginValue) + 'px');
    }

    function _setIsScrolledDown () {
      _currentAnchorOffset = anchorElement.getBoundingClientRect().top;
      if (_currentAnchorOffset > 0) { // If scrolled above the splash-page
        vm.isScrolledDown = false;
      } else { // Else is scrolled past splash-page
        vm.isScrolledDown = true;
      }
      if (vm.isScrolledDown && _currentAnchorOffset > _previousAnchorOffset) { // If scrolled down and scrolling downwards
        _setAnchorMarginBottom();
      } else {
        _setAnchorMarginBottom(0);
      }
      _previousAnchorOffset = _currentAnchorOffset;
    }

    function contact () {
      if (!vm.formSent) {
        Contact.post(vm.form).then(function () {
          Alert.show('Your message has been sent!');
          vm.formSent = true;
        });
      }
    }

    function toggleNav (collapse) {
      $timeout(_setAnchorMarginBottom, 10);
      vm.isCollapsed = collapse || !vm.isCollapsed;
    }

    function scrollToTop () {
      $document.scrollTop(0, 500).then(function () {
        // do something...
      });
    }

    function openModal (size) {
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return vm.items;
          }
        }
      });
      modalInstance.result.then();
    }

  }

})();
