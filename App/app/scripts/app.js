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
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, AccessLevels) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'blog',

            })
            .when('/resume', {
                templateUrl: 'views/resume.html',
                controller: 'ResumeCtrl',
                controllerAs: 'resume',
                
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/logoff', {
                templateUrl: 'views/logoff.html',
                controller: 'LogoffCtrl',
                controllerAs: 'logoff'
            })
            .when('/post', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl',
                controllerAs: 'post'
            })
            .otherwise({
                redirectTo: '/'
            })
        //.run goes here with the rootscope code
    });
