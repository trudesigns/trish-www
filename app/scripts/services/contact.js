(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name trishApp.contact
   * @description
   * # contact
   * Service in the trishApp.
   */
  angular.module('trishApp')
    .service('Contact', Contact);

    /* @ngInject */
    function Contact ($http, config) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      /**
       * [post description]
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */
      this.post = function (data) {
        var message = 'Hello Trish! \n' +
          ' \n' +
          'There\'s someone who\'d like to meet you! \n' +
          ' \n' +
          data.name +
            ' (' + data.email +
            (function (w) { return w ? ' and ' + w : ''; })(data.website) +
            ') \n' +
          ' \n' +
          ' \n' +
          'This is an automated message from ' +
            config.siteUrl +
            '.' +
          ' \n';

        return $http({
          data: message,
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          method: 'POST',
          url: config.apiUrl + 'contact'
        });
      };

    }

})();
