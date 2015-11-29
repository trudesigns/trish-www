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
  ModalInstanceCtrl.$inject = ['$scope'];

  function ModalInstanceCtrl($scope) {

    var slides = $scope.slides = [];

    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: '//placekitten.com/' + newWidth + '/300',
        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
      });
    };

    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }

  }

})();
