'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('moivego.services', ['ngResource', 'ngCookies']).
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
                movie: $resource('/api/movie/:ID/:OP',{},{
                    get: {
                        method: 'GET',
                        isArray: true
                    }
                }),
                search: $resource('/api/search/:ID/:OP',{},{
                    get: {
                        method: 'GET',
                        isArray: true
                    }
                })
            }
        }
]).factory('cache', ['$cacheFactory',
    function ($cacheFactory) {
        return {
            movie: $cacheFactory('movie', {
                capacity: 100
            }),
            list: $cacheFactory('list', {
                capacity: 100
            })
        };
    }
]).factory('param', function () {
        return $.param;
}).factory('promiseGet', ['$q',
    function ($q) {
        return function (param, restAPI, cacheId, cache) {
            var result, defer = $q.defer();

            result = cacheId && cache && cache.get(cacheId);
            if (result) {
                defer.resolve(result);
            } else {
                restAPI.get(param, function (data) {
                    if (cacheId && cache) {
                        cache.put(cacheId, data);
                    }
                    defer.resolve(data);
                }, function (data) {
                    defer.reject(data.error);
                });
            }
            return defer.promise;
        };
    }
]).factory('myConf', ['$cookieStore', 'tools',
    function ($cookieStore, tools) {
        function checkValue(value, defaultValue) {
            return tools.isNull(value) ? defaultValue : value;
        }

        function myCookies(name, initial) {
            return function (value, pre, defaultValue) {
                pre = tools.toStr(pre) + name;
                defaultValue = checkValue(defaultValue, initial);
                var result = checkValue($cookieStore.get(pre), defaultValue);
                if (!tools.isNull(value) && result !== checkValue(value, defaultValue)) {
                    $cookieStore.put(pre, value);
                    result = value;
                }
                return result;
            };
        }
        return {
            pageSize: myCookies('PageSize', 10),
            sumModel: myCookies('sumModel', false)
        };
    }
]).factory('getList', ['restAPI', 'cache', 'promiseGet', 'tools', 'myConf',
    function (restAPI, cache, promiseGet, tools, myConf) {
        return function (listType, count) {
            count = tools.isNull(count) ? myConf.PageSize : count;
            return promiseGet({
                ID: listType,
                count: count
            }, restAPI.movie, listType, cache.list);
        };
    }
]).
value('version', '0.1');
