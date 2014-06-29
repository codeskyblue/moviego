'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('moivego', [
  'moivego.tools',
  'ui.bootstrap',
  'moivego.router',
  'moivego.filters',
  'moivego.services',
  'moivego.directives',
  'moivego.controllers'
]).
config(['$httpProvider','app',
    function($httpProvider, app) {
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    }])
    .run(['app', '$q', '$rootScope', '$location', '$http', 'toast', 'tools', '$locale','cache', 'restAPI','promiseGet','param',
            function(app, $q, $rootScope, $location, $http, toast, tools, $locale, cache, restAPI, promiseGet, param) {
    var global = $rootScope.global = {
        isLogin: false,
        user:{}
    };
    app.q = $q;
    app.toast = toast;
    app.http = $http;
    app.rootScope = $rootScope;
    app.location = $location;
    app.cache = cache;
    app.restAPI = restAPI;
    app.promiseGet = promiseGet;
    app.param = param;

    angular.extend(app, tools); //添加工具函数
  
    var error = {};
    //app.rootScope.$apply();
}])
    ;
