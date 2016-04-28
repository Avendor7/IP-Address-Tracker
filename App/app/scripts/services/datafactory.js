'use strict';

/**
 * @ngdoc service
 * @name appApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('dataFactory', function ($http) {
    return {
      /**
       * One time fetch from server for single Dog dataset based on id
       * @method get
       * @param id
       */
      get: function (id) {
        return $http.get('http://localhost:1337/ipaddress/'+ id);
      },

      /**
       * One time fetch from server for full Dog dataset
       * @method getAll
       */
      getAll: function () {
        return $http.get('http://localhost:1337/ipaddress');
      },
      put: function () {
        return $http.put('http://localhost:1337/ipaddress'+ id);
      },
      delete: function () {
        return $http.get('http://localhost:1337/ipaddress'+ id);
      },
      post: function () {
        return $http.get('http://localhost:1337/ipaddress');
      }
    }
  });
