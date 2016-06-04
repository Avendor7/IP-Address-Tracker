'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SnippetCtrl
 * @description
 * # SnippetsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('SnippetCtrl', function ($scope, snippetFactory, $stateParams, $state) {
        //get current snippet ID from URL
        var currentId = $stateParams.id;
        //query the database for the snippet data
        snippetFactory.get(currentId)
            .success(function (response) {
                //on success, load the editor and the snippet into the editor
                $scope.snippet = response;

                //when save button is pressed
                $scope.updateSnippet = function () {
                    //write put request to snippet factory
                    snippetFactory.put($scope.snippet)
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
                
                $scope.deleteSnippet = function () {
                    //send the delete request to snippet factory
                    
                    snippetFactory.delete(currentId)
                        .success(function (response,status) {
                            //TODO: have factory return the id so $state can be redirected
                            $state.go('user.viewSnippets');
                            console.log(status);
                            console.log('Boom, deleted');
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