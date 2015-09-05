'use strict';

/**
 * @ngdoc function
 * @name trishApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the trishApp
 */
angular.module('trishApp')
  .controller('NavCtrl', function ($scope, $document) {

    $scope.nav = {
      isCollapsed : true,
      isScrolledDown : null,
      scrollToTop : function () {
        console.log('asd');
        $document.scrollTop(0, 500).then(function () {
          // do something...
        });
      }
    };

  });
