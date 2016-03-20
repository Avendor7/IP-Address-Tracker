'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('HomeCtrl', function ($http, $scope, API_ENDPOINT, AuthInterceptor, $state) {
        //get the data
        
        
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
        
        //post new data
        $scope.newAddress = function () {
            
            // var formData = { 
            //     'hostname': $scope.hostname, 
            //     'ipv4': $scope.ipv4,
            //     'vm': $scope.vm,
            //     'os': $scope.os,
            //     'description': $scope.description,
            //     };
            console.log(AuthInterceptor);
            $http({
                method: 'POST',
                url: 'http://localhost:1337/ipAddress',
                data: $scope.address
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.ipaddressData = response.data;
                console.log(response.data);
                $state.go('user.home');
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.ipaddressData = response.data;
                console.log(response.data);
            });

        };
        
        
        //put update current data from current id
        $scope.editAddress = function () {

            var formData = {
                'hostname': $scope.address.hostname,
                'ipv4': $scope.address.ipv4,
                'vm': $scope.address.vm,
                'os': $scope.address.os,
                'description': $scope.description,
            };

            $http({
                method: 'PUT',
                url: 'http://localhost:1337/ipaddress',
                data: formData,
                params: { id: $scope.id }
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.ipaddressData = response.data;
                console.log(response.data);
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.ipaddressData = response.data;
                console.log(response.data);
            });
        };
        //delete data from ID
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
    });
