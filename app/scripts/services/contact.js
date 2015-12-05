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

    function Contact ($http, config) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      /**
       * [post description]
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */
      this.post = function (data) {
        var postData = angular.toJson(data);
        return $http({
          data: postData,
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          method: 'POST',
          url: config.apiUrl + 'contact'
        });
      };

    }

})();
