'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('HomeCtrl', function ($http, $scope, API_ENDPOINT) {
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
        //post
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
        //put
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
        //delete
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
