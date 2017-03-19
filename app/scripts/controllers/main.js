/* global WOW Typed */

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

  /* @ngInject */
  function MainCtrl (Contact, Alert) {
    /* jshint validthis: true */
    var vm = this;

    vm.contact = contact;

    _init();

    function _init () {
      _resetForm();
      new WOW().init();

      // typed js
      document.addEventListener('DOMContentLoaded', function(){
          Typed.new('.trishtype', {
            strings: ["LIFE WITHOUT THE EXPERIENCE IS JUST MEANINGLESS."],
            typeSpeed: 0,
            showCursor: false
          });
      });
    }

    function _resetForm () {
      vm.form = {
        "name": null,
        "email": null,
        "message": null
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
