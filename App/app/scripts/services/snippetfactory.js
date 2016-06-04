'use strict';

/**
 * @ngdoc service
 * @name appApp.snippetFactory
 * @description
 * # snippetFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('snippetFactory', function ($http) {
   return {
   
      get: function (id) {
        return $http.get(API_ENDPOINT + '/snippet/' + id);
      },

      getAll: function () {
        return $http.get(API_ENDPOINT + '/snippet/');
      },
      
      put: function (data) {
        return $http.put(API_ENDPOINT + '/snippet/' + data.id, data);
      },
      
      delete: function (id) {
        return $http.delete(API_ENDPOINT + '/snippet/' + id);
      },
      post: function (data) {
        return $http.post(API_ENDPOINT + '/snippet/', data);
      }
    };
  });
