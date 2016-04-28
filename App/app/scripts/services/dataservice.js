'use strict';

/**
 * @ngdoc service
 * @name appApp.dataService
 * @description
 * # dataService
 * Service in the appApp.
 */
angular.module('appApp')
  .service('dataService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  return {
        getAllAddresses: function() {
             //return the promise directly.
             return $http.get('http://localhost:1337/ipaddress')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result.data;
                        });
        }
       
   }
   
});
