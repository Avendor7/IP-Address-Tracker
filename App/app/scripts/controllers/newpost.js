'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:NewpostCtrl
 * @description
 * # NewpostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('NewpostCtrl', function ($scope, blogFactory) {
    
    function makePost() {
      //write put request to database factory
      console.log("clicked");
      blogFactory.post($scope.newPost)
        .success(function () {
          //TODO: have factory return the id so $state can be redirected
          console.log("It Worked... finally");
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
    }
  });
