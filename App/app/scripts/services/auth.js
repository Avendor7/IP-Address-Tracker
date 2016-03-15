'use strict';

/**
 * @ngdoc service
 * @name appApp.Auth
 * @description
 * # Auth
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('Auth', function ($http, LocalService, AccessLevels) {
    return {
    authorize: function(access) {
      if (access === AccessLevels.user) {
        return this.isAuthenticated();
      } else {
        return true;
      }
    },
    isAuthenticated: function() {
        
      return LocalService.get('auth_token');
    },
    login: function(credentials) {
      
      var login = $http.post('http://127.0.0.1:1337/auth/login', credentials);
      login.success(function(result) {
        LocalService.set('auth_token', JSON.stringify(result));
      });
      return login;
    },
    logout: function() {
      // The backend doesn't care about logouts, delete the token and you're good to go.
      alert("logged out");
      LocalService.unset('auth_token');
    },
    register: function(formData) {
      LocalService.unset('auth_token');
      var register = $http.post('http://127.0.0.1:1337/auth/register', formData);
      register.success(function(result) {
        LocalService.set('auth_token', JSON.stringify(result));
      });
      return register;
    }
  };
  });
