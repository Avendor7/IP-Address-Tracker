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
         'ui.bootstrap',
         'textAngular'
         
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
            .state('anon.post', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl',
                url: '/post/:id'
            })
            .state('anon.snippets', {
                templateUrl: 'views/snippets.html',
                controller: 'SnippetsCtrl',
                url: '/snippets'
            });
            
        $stateProvider
            .state('user', {
                abstract: true,
                template: '<ui-view/>',
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.ipaddress', {
                templateUrl: 'views/ipaddress.html',
                controller: 'IPAddressCtrl',
                url: '/IPAddressManager'
            })
            .state('user.newPost', {
                templateUrl: 'views/newpost.html',
                controller: 'NewpostCtrl',
                url: '/post/new'
            });
            
        
        $urlRouterProvider.otherwise('/');
        $httpProvider.interceptors.push('AuthInterceptor');

    })
    .run(function ($rootScope, $state, Auth) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            if (!Auth.authorize(toState.data.access)) {
                event.preventDefault();
                $state.go('anon.login');
            }
        });
    });