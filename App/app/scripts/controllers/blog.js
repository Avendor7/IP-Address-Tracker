'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('BlogCtrl', function ($scope, blogFactory) {
     blogFactory.getAll()
      .success(function (response) {
        var fullPost = response;
        $scope.fullPost = fullPost;
        console.log($scope.fullPost);
      })
      .error(function (response, status) {
        switch (status) {
          case 404:
            console.log('404 server not found');
            break;
          default:
            console.log('General Error');
            break;
        }
      });
  });
