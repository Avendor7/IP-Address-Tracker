'use strict';

/**
 * @ngdoc service
 * @name appApp.dataFactory
 * @description
 * # dataFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('ipaddressFactory', function ($http, API_ENDPOINT) {
    return {
   
      get: function (id) {
        return $http.get(API_ENDPOINT.url + 'ipaddress/' + id);
      },

      getAll: function () {
        return $http.get(API_ENDPOINT.url + 'ipaddress/');
      },
      
      put: function (data) {
        return $http.put(API_ENDPOINT.url + 'ipaddress/' + data.id, data);
      },
      
      delete: function (id) {
        return $http.delete(API_ENDPOINT.url + 'ipaddress/' + id);
      },
      post: function (data) {
        return $http.post(API_ENDPOINT.url + 'ipaddress/', data);
      }
    };
  });
