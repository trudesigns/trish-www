(function () {
  'use strict';

  /**
  * @ngdoc function
  * @name trishApp.controller:ModalinstanceCtrl
  * @description
  * # ModalinstanceCtrl
  * Controller of the trishApp
  */
  angular
  .module('trishApp')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  function ModalInstanceCtrl($scope, $uibModalInstance, slides, $filter) {

    function _getActiveSlide () {
      var result = $filter('filter')(slides, {active: true});
      return result[0] ? result[0] : null;
    }

    this.close = function () {
      $uibModalInstance.close();
    };

    this.getActiveSlideTitle = function () {
      var slide = _getActiveSlide();
      if (slide) {
        if (slide.link) {
          return slide.text + ' ' + $filter('linky')(slide.link, '_blank');
        } else {
          return slide.text;
        }
      }
    };

    this.slides = slides;

  }

})();
