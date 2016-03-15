'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('LoginCtrl', function($scope, $location, Auth) {

    $scope.loginNow = function() {
      Auth.login($scope.user).success(function(result) {
        //$location.path('/');
        alert("login successful");
      }).error(function(err) {
        //$scope.errors.push(err);
        alert("login failed");
      });
    }
});

