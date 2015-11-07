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

  /**
   *
   */
  MainCtrl.$inject= ['$scope', '$document', '$window', '$timeout', '$modal', '$log'];

  function MainCtrl ($scope, $document, $window, $timeout, $modal, $log) {

    var vm = this;

    var _currentAnchorOffset;
    var _previousAnchorOffset;
    var anchorElement = document.getElementById('anchorBeginIsScrolledDown');
    var navElement = document.getElementById('navbar');

    vm.isCollapsed = true;
    vm.isScrolledDown = null;
    vm.toggleNav = toggleNav;
    vm.scrollToTop = scrollToTop;

    vm.animationsEnabled = true;
    vm.items = ['item1', 'item2', 'item3'];
    vm.open = open;
    vm.selected = null;
    vm.toggleAnimation = toggleAnimation;

    _init();

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
      angular.element(anchorElement).css('margin-bottom', (newValue ? newValue : vm.isScrolledDown ? navElement.offsetHeight + 20 : 0) + 'px');
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

    function toggleNav (collapse) {
      $timeout(_setAnchorMarginBottom, 10);
      vm.isCollapsed = collapse || !vm.isCollapsed;
    }

    function scrollToTop () {
      $document.scrollTop(0, 500).then(function () {
        // do something...
      });
    }

    function open (size) {
      var modalInstance = $modal.open({
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
      modalInstance.result.then(function (selectedItem) {
       vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

    function toggleAnimation () {
      vm.animationsEnabled = !vm.animationsEnabled;
    }

  }

})();
