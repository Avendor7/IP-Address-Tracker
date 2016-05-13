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
        var allPosts = response;
        $scope.allPosts = allPosts;
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
