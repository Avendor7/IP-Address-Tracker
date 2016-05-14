'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SnippetCtrl
 * @description
 * # SnippetsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('SnippetCtrl', function ($scope, snippetFactory, $stateParams) {
    var currentId = $stateParams.id;
    
    snippetFactory.get(currentId)
      .success(function (response) {
        var fullSnippet = response;
        $scope.fullSnippet = fullSnippet;
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
