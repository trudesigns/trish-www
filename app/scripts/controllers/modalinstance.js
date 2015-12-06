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

  function ModalInstanceCtrl($uibModalInstance) {

    this.close = function () {
      $uibModalInstance.close();
    };

  }

})();
