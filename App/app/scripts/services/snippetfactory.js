'use strict';

/**
 * @ngdoc service
 * @name appApp.snippetFactory
 * @description
 * # snippetFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('snippetFactory', function () {
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
