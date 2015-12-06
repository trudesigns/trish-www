(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name trishApp.alert
   * @description
   * # alert
   * Service in the trishApp.
   */
  angular.module('trishApp')
    .service('Alert', Alert);

    function Alert ($uibModal) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      /**
       * [show description]
       * @param  {[type]} message [description]
       * @return {[type]}         [description]
       */
      this.show = function (message) {

        var template =
          '<div class="modal-header">' +
          '  <h3 class="modal-title">{{ message }}</h3>' +
          '</div>' +
          '<div class="modal-footer">' +
          ' <button type="button" ng-click="close()">Ok</button>' +
          '</div>';


        var modalInstance = $uibModal.open({
          template: template,
          controller: function ($scope, $uibModalInstance, message) {
            $scope.close = function () {
              $uibModalInstance.close();
            };
            $scope.message = message;
          },
          resolve: {
            message: function () {
              return message;
            }
          }
        });

        return modalInstance.result;
      };

    }

})();
