'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:htmlTrustFilter
 * @function
 * @description
 * # htmlTrustFilter
 * Filter in the appApp.
 */
angular.module('appApp')
  .filter('htmlTrustFilter', ['$sce', function($sce) {
    return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        };
  }]);
