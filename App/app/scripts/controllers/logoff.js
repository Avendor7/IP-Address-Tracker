'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LogoffCtrl
 * @description
 * # LogoffCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('LogoffCtrl',function($scope, $state, Auth) {
   
   Auth.logout();
   $state.go('anon.blog');
      
     
  });
