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
   
      get: function (id) {
        return $http.get('http://localhost:1337/ipaddress/' + id);
      },

      getAll: function () {
        return $http.get('http://localhost:1337/ipaddress');
      },
      
      put: function (data) {
        return $http.put('http://localhost:1337/ipAddress/' + data.id, data);
      },
      
      delete: function (id) {
        return $http.delete('http://localhost:1337/ipaddress/' + id);
      },
      post: function (data) {
        return $http.post('http://localhost:1337/ipaddress', data);
      }
    }
  });
