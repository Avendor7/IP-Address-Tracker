'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:NewpostCtrl
 * @description
 * # NewpostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('NewpostCtrl', function ($scope,blogFactory) {
     
        
        //write put request to database factory
        blogFactory.post($scope.newPostHTML)
          .success(function () {
            //TODO: have factory return the id so $state can be redirected
            
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
