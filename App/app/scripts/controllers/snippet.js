'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SnippetCtrl
 * @description
 * # SnippetsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('SnippetCtrl', function($scope, snippetFactory, $stateParams) {
        var currentId = $stateParams.id;
        snippetFactory.get(currentId)
            .success(function(response) {
                var fullSnippet = response;
                $scope.fullSnippet = fullSnippet;

                $scope.aceLoaded = function(_editor) {
                    // Options
                    _editor.setReadOnly(true);
                    // _editor.mode(fullSnippet.language);
                    //_editor.mode('python');

                };
                $scope.aceChanged = function(e) {
                    //
                };
                function updateSnippet() {
                    //write put request to database factory
                    snippetFactory.put($scope.fullSnippet)
                        .success(function() {
                            //TODO: have factory return the id so $state can be redirected
                            console.log("It Worked... finally");
                        })
                        .error(function(response, status) {
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
            })
            .error(function(response, status) {
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