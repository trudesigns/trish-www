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

      function link () {

      }

    }

    function controller ($uibModal) {
      /* jshint validthis: true */
      var vm = this;

      vm.openModal = openModal;

      function openModal (filter) {
        $uibModal.open({
          controller: 'ModalInstanceCtrl',
          controllerAs: 'ModalInstanceCtrl',
          resolve: {
            filter: function () {
              return filter;
            }
          },
          size: 'lg',
          templateUrl: 'myModalContent.html'
        }).result.then();
      }

    }

})();
