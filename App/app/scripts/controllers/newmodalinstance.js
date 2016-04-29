'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:NewmodalinstanceCtrl
 * @description
 * # NewmodalinstanceCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('NewModalInstanceCtrl', function ($scope, $uibModalInstance) {
    
   
   
    $scope.ok = function () {
      $uibModalInstance.close($scope.ipaddressData);
      //console.log($scope.ipaddressData);
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
