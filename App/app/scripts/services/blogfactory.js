'use strict';

/**
 * @ngdoc service
 * @name appApp.blogFactory
 * @description
 * # blogFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('blogFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
