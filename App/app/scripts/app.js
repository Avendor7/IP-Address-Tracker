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
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: AccessLevels.anon
                }
            })
            .state('anon.blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'blog',
                url: '/'
            })
            .state('anon.resume', {
                templateUrl: 'views/resume.html',
                controller: 'ResumeCtrl',
                controllerAs: 'resume',
                url: '/resume'

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
           // .state('anon.post', {
         //       templateUrl: 'views/post.html',
       //         controller: 'PostCtrl',
        //        url: '/post'
      //      });
            
        $stateProvider
            .state('user', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.post', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl',
                url: '/post'
            });
            
        $urlRouterProvider.otherwise('/');

    })
    .run(function ($rootScope, $state, Auth) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (!Auth.authorize(toState.data.access)) {
                event.preventDefault();

                $state.go('anon.login');
            }
        });
    });