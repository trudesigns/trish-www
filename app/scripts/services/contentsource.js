'use strict';

/**
 * @ngdoc service
 * @name trishApp.Contentsource
 * @description
 * # Contentsource
 * Service in the trishApp.
 */
angular.module('trishApp')
  .service('Contentsource', function Contentsource() {

    this.data = [
      { title : 'asd asd SOME TITLE 1', content : 'LOL LOL CONTENT 1' },
      { title : 'asd asd SOME TITLE 2', content : 'LOL LOL CONTENT 2' },
      { title : 'asd asd SOME TITLE 3', content : 'LOL LOL CONTENT 3' },
      { title : 'asd asd SOME TITLE 4', content : 'LOL LOL CONTENT 4' },
      { title : 'asd asd SOME TITLE 5', content : 'LOL LOL CONTENT 5' }
    ];

    this.get = function () {
      return this.data;
    };

  });
