'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:EditmodalinstanceCtrl
 * @description
 * # EditmodalinstanceCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('EditModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
     $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  });
