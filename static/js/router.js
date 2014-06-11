'use strict';

angular.module('moivego.router', ['ngRoute']).
constant('app', {}).provider('getFile', ['app',
    function (app) {
        this.html = function (fileName) {
            return '/tpl/' + fileName ;
        }
        this.$get = function () {
            return {
                html: this.html
            }
        };
    }
]).config(['app','$routeProvider', '$locationProvider', 'getFileProvider',

    function (app,$routeProvider, $locationProvider, getFileProvider) {
        var index = {
            templateUrl: getFileProvider.html('index.html'),
            controller: 'indexCtrl',
            pageClass: 'index'
        };

        $routeProvider.
        when('/', index).
        otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    }
]);