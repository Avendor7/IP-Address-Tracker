'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:NewpostCtrl
 * @description
 * # NewpostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('NewpostCtrl', function ($scope, blogFactory, $state) {
    
    $scope.makePost = function () {
      console.log($scope.newPost);
      //write put request to database factory
      blogFactory.post($scope.newPost)
        .success(function () {
          //TODO: have factory return the id so $state can be redirected
          $state.href("anon.post", { id:newPost.id });
          console.log('It Worked... finally');
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
    }; 
  });
