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

    vm.form = {
      name: null,
      email: null,
      website: null
    };

    vm.contact = contact;
    vm.formSent = false;

    _init();

    function _init () {
      new WOW().init();
    }

    function contact () {
      if (!vm.formSent) {
        Contact.post(vm.form).then(function () {
          Alert.show('Your message has been sent!');
          vm.formSent = true;
        });
      }
    }

  }

})();
