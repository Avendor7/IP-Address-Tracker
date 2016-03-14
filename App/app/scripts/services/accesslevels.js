'use strict';

/**
 * @ngdoc service
 * @name appApp.AccessLevels
 * @description
 * # AccessLevels
 * Service in the appApp.
 */
angular.module('appApp')
  .constant('AccessLevels', {
    anon: 0,
    user: 1
  });