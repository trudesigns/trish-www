/* global WOW,classie */

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

      (function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }
      })();
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