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
        return $http.get('http://159.203.32.239:1337/blog/'+ id);
      },

      getAll: function () {
        return $http.get('http://159.203.32.239:1337/blog');
      },
      
      put: function (data) {
        return $http.put('http://localhost:1337/blog/' + data.id, data);
      },
      
      delete: function (id) {
        return $http.delete('http://localhost:1337/blog/' + id);
      },
      post: function (data) {
        return $http.post('http://localhost:1337/blog', data);
      }
    };
  });
