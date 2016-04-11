'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:EditmodalinstanceCtrl
 * @description
 * # EditmodalinstanceCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('EditmodalinstanceCtrl', function ($uibModalInstance, address) {
    $scope.address = address;
  });
