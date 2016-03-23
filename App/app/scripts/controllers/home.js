'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('HomeCtrl', function ($http, $scope, API_ENDPOINT, $state, $uibModal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

        
        
        //get the data
        function getData() {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/ipaddress'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.ipaddressData = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.ipaddressData = "failed";
            });
        }

        getData();
        //post new data
        $scope.newAddress = function () {

            $http({
                method: 'POST',
                url: 'http://localhost:1337/ipAddress',
                data: $scope.address
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.ipaddressData = response.data;
                console.log(response.data);
                getData();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.ipaddressData = response.data;
                console.log(response.data);
            });

        };
        
        //put update current data from current id
        $scope.editAddress = function () {

            $http({
                method: 'PUT',
                url: 'http://localhost:1337/ipAddress',
                data: $scope.address
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.ipaddressData = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.ipaddressData = response.data;
                console.log(response.data);
            });

        };
        
        //delete data from ID
        $scope.deleteAddress = function (id) {

            $http({
                method: 'DELETE',
                url: 'http://localhost:1337/ipAddress/' + id,
                data: $scope.address
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.ipaddressData = response.data;
                getData();
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.ipaddressData = response.data;
                console.log(response.data);
            });

        };
    });
angular.module('appApp').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

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
