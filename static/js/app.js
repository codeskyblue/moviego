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
    .run(['app', '$q', '$rootScope', '$location', '$http', 'toast', 'tools', '$locale',
            function(app, $q, $rootScope, $location, $http, toast, tools, $locale) {
    var global = $rootScope.global = {
        isLogin: false,
        user:{}
    };
    app.q = $q;
    app.toast = toast;
    app.http = $http;
    app.rootScope = $rootScope;
    app.location = $location;
    app.rootScope = $rootScope;
    angular.extend(app, tools); //添加工具函数

    app.auth = function(){

    };
    app.validate = function (scope, turnoff) {
        var collect = [],
            error = [];
        scope.$broadcast('genTooltipValidate', collect, turnoff);
        console.log(collect);
        app.each(collect, function (x) {
            if (x.validate && x.$invalid) {
                error.push(x);
            }
        });
        if (error.length === 0) {
            app.validate.errorList = null;
            scope.$broadcast('genTooltipValidate', collect, true);
        } else {
            app.validate.errorList = error;
        }
        return !app.validate.errorList;
    };
    $rootScope.validateTooltip = {
        validate: true,
        validateMsg: $locale.VALIDATE
    };
    var error = {};
    //app.rootScope.$apply();
}])
    ;
