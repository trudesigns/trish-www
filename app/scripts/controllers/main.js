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

    _init();

    function _init () {
      new WOW().init();
    }

    function contact () {
      Contact.post(vm.form).then(function () {
        Alert.show('Your message has been sent!');
        vm.form = {
          name: null,
          email: null,
          website: null
        };
      });
    }

  }

})();