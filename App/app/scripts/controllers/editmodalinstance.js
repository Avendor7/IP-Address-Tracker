'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:EditmodalinstanceCtrl
 * @description
 * # EditmodalinstanceCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('EditModalInstanceCtrl', function ($scope, $uibModalInstance, addressData) {
    $scope.ipaddressData = addressData;



    $scope.ok = function () {
      $uibModalInstance.close($scope.ipaddressData);
      //console.log($scope.ipaddressData);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
