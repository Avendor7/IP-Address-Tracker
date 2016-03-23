'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
    .module('appApp', [
        'ui.router',
         'ui.bootstrap'
    ])
    .config(function ($stateProvider, $urlRouterProvider, AccessLevels, $httpProvider) {
        $stateProvider
            .state('anon', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: AccessLevels.anon
                }
            })
            .state('anon.login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login',
                url: '/login'
            })
            .state('anon.logoff', {
                templateUrl: 'views/logoff.html',
                controller: 'LogoffCtrl',
                controllerAs: 'logoff',
                url: '/logoff'
            });
            
        $stateProvider
            .state('user', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                url: '/'
            });
            
        $urlRouterProvider.otherwise('/');
        $httpProvider.interceptors.push('AuthInterceptor');

    })
    .run(function ($rootScope, $state, Auth) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (!Auth.authorize(toState.data.access)) {
                event.preventDefault();
                $state.go('anon.login');
            }
        });
    });