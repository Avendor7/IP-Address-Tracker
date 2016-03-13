'use strict';

/**
 * @ngdoc service
 * @name appApp.myConstants
 * @description
 * # myConstants
 * Constant in the appApp.
 */
angular.module('appApp')
  
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})
 
.constant('API_ENDPOINT', {
  url: 'http://127.0.0.1:1337/api' //Sails API URL
});