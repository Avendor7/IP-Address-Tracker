'use strict';

/**
 * @ngdoc service
 * @name appApp.blogFactory
 * @description
 * # blogFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('blogFactory', function ($http, API_ENDPOINT) {
      return {
   
      get: function (id) {
        return $http.get(API_ENDPOINT.url + 'blog/' + id);
      },

      getAll: function () {
        return $http.get(API_ENDPOINT.url + 'blog');
      },
      
      put: function (data) {
        return $http.put(API_ENDPOINT.url + 'blog/' + data.id, data);
      },
      
      delete: function (id) {
        return $http.delete(API_ENDPOINT.url + 'blog/' + id);
      },
      post: function (data) {
        return $http.post(API_ENDPOINT.url + 'blog/', data);
      }
    };
  });
