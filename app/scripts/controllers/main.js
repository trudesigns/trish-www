/* global WOW */

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

  function MainCtrl (Contact, Alert) {

    var vm = this;

    vm.contact = contact;

    _init();

    function _init () {
      _resetForm();
      new WOW().init();
    }

    function _resetForm () {
      vm.form = {
        name: null,
        email: null,
        website: null
      };
    }

    function contact () {
      Contact.post(vm.form).then(function () {
        Alert.show('Your message has been sent!');
      }, function () {
        Alert.show('Oops! Your message could not be sent!');
      });
      _resetForm();
    }

  }

})();
