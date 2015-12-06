(function () {
  'use strict';

  angular
    .module('trishApp')
    .directive('trishModal', trishModal);

    function trishModal () {

      return {
        controller: controller,
        controllerAs: 'ModalCtrl',
        link: link,
        restrict: 'A'
      };

      function link (scope, element, attributes, ctrl) {
        function onClick () {
          ctrl.openModal(attributes.filter);
        }
        angular.element(element[0]).bind('click', onClick);
      }

    }

    function controller ($uibModal, $filter, MyWork) {
      /* jshint validthis: true */
      this.openModal = function (filterOn) {
        $uibModal.open({
          controller: 'ModalInstanceCtrl',
          controllerAs: 'ModalInstanceCtrl',
          resolve: {
            slides: function () {
              var slides = $filter('filter')(MyWork.slides, {image: filterOn});
              return slides;
            }
          },
          size: 'lg',
          templateUrl: 'myModalContent.html'
        }).result.then();
      };

    }

})();
