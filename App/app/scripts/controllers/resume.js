'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ResumeCtrl', function ($scope,$state) {
    
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $state.go());
     return active;
    };
  });
