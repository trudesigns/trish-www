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

      function openModal (title) {
        $uibModal.open({
          controller: 'ModalInstanceCtrl',
          resolve: {
            title: function () {
              return title;
            }
          },
          templateUrl: 'myModalContent.html'
        }).result.then();
      }

    }

})();
