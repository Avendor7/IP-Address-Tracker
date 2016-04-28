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
 
     //console.log($scope.ipaddressData);
     
     
  $scope.ok = function () {
   // $uibModalInstance.close($scope.selected.item);
    
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  });
