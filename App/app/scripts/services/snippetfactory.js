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
        return $http.get('http://localhost:1337/snippet/' + id);
      },

      getAll: function () {
        return $http.get('http://localhost:1337/snippet');
      },
      
      put: function (data) {
        return $http.put('http://localhost:1337/snippet/' + data.id, data);
      },
      
      delete: function (id) {
        return $http.delete('http://localhost:1337/snippet/' + id);
      },
      post: function (data) {
        return $http.post('http://localhost:1337/snippet', data);
      }
    };
  });
