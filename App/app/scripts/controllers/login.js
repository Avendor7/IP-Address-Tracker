'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('LoginCtrl', function($scope, $state, Auth) {

    $scope.loginNow = function() {
      Auth.login($scope.user).success(function(result) {
        $state.go('user.home');
      }).error(function(err) {
        //$scope.errors.push(err);
      });
    };
});

