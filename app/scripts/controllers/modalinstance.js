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

  /**
  *
  */
  ModalInstanceCtrl.$inject = ['$scope', '$modalInstance', 'items'];

  function ModalInstanceCtrl($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
     item: $scope.items[0]
    };

    $scope.ok = function () {
     $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
     $modalInstance.dismiss('cancel');
    };

  }

})();
