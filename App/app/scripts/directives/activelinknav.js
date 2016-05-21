'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:activeLinkNav
 * @description
 * # activeLinkNav
 */
angular.module('appApp')
    .directive('activeLinkNav', ['$state', function ($state) {
        return {
            restrict: 'A', //use as attribute 
            replace: false,
            link: function (scope, elem) {
                //after the route has changed
                scope.$on('$routeChangeSuccess', function () {
                    var hrefs = ['/#' + $state.go(),
                        '#' + $state.go(), //html5: false
                        $state.go()]; //html5: true
                    angular.forEach(elem.find('a'), function (a) {
                        a = angular.element(a);
                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
                            a.parent().addClass('active');
                        } else {
                            a.parent().removeClass('active');
                        }
                    });
                });
            }
        };
    }]);