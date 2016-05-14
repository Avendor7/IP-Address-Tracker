'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ViewsnippetsCtrl
 * @description
 * # ViewsnippetsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ViewsnippetsCtrl', function ($scope, snippetFactory) {
   snippetFactory.getAll()
      .success(function (response) {
        $scope.allSnippets = response;
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
