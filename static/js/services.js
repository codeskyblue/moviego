'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('moivego.services', ['ngResource']).
factory('toast', ['$log', 'tools',
    function ($log, tools) {
        var toast = {},
            methods = ['info', 'error', 'success', 'warning'];

        angular.forEach(methods, function (x) {
            toast[x] = function (message, title) {
                var log = $log[x] || $log.log;
                title = tools.toStr(title);
                log(message, title);
                message = angular.isObject(message) ? angular.toJson(message) : tools.toStr(message);
                toastr[x](message, title);
            };
        });
        toastr.options = angular.extend({
            positionClass: 'toast-bottom-full-width'
        }, toast.options);
        toast.clear = toastr.clear;
        return toast;
    }
]).
factory('restAPI',['$resource',
        function ($resource){
            return {
                index: $resource('/api/index/:OP'),
                hot: $resource('/api/hot/')
            }
        }
]).factory('isVisible', function () {
        return function (element) {
            var rect = element[0].getBoundingClientRect();
            return Boolean(rect.bottom - rect.top);
        };
}).
value('version', '0.1');
