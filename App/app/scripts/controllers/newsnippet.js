'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:NewsnippetCtrl
 * @description
 * # NewsnippetCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('NewsnippetCtrl', function ($scope, snippetFactory) {
    $scope.code = '';
    
       $scope.createSnippet = function () {
      //write put request to database factory
      snippetFactory.post($scope.newSnippet)
        .success(function () {
          //TODO: have factory return the id so $state can be redirected
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
