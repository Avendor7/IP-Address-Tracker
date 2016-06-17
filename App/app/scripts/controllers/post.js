'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PostCtrl', function ($scope, blogFactory, $stateParams) {
    
    var currentId = $stateParams.id;
    console.log(currentId);
    blogFactory.get(currentId)
      .success(function (response) {
        var fullPost = response;
        $scope.fullPost = fullPost;
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
