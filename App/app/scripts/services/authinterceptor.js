'use strict';

/**
 * @ngdoc service
 * @name appApp.AuthInterceptor
 * @description
 * # AuthInterceptor
 * Factory in the appApp.
 */
angular.module('appApp')
    .factory('AuthInterceptor', function ($q, $injector, LocalService, $location) {
        return {
            request: function (config) {
                var LocalService = $injector.get('LocalService');
                var token;
                if (LocalService.get('auth_token')) {
                    token = angular.fromJson(LocalService.get('auth_token')).token;
                }
                if (token) {
                    config.headers.Authorization = 'Bearer ' + token;
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 401 || response.status === 403) {
                    LocalService.unset('auth_token');
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    });
