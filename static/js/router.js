'use strict';

angular.module('moivego.router', ['ngRoute']).
constant('app', {}).provider('getFile', ['app',
    function (app) {
        this.html = function (fileName) {
            console.log(fileName);
            return 'static/tpl/' + fileName ;
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
            templateUrl: getFileProvider.html('_index.html'),
            controller: 'indexCtrl',
            pageClass: 'index'
        };
        var moive = {
            templateUrl: getFileProvider.html('movie.html'),
            controller: 'movieCtrl',
            pageClass: 'movie'
        };

        $routeProvider.
        when('/movie/:ID', moive).
        when('/', index).
        otherwise({
           // redirectTo: '/moive'
        });
        $locationProvider.html5Mode(true);
    }
]);