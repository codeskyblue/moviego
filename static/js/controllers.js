'use strict';

/* Controllers */

angular.module('moivego.controllers', [])
  .controller('indexCtrl', ['app', '$scope', '$rootScope', '$location', '$timeout','getList',
        function(app, $scope, $rootScope, $location, $timeout, getList) {
          getList('rating').then(function (data) {
              $scope.topMovies = data.slice(0, 28);
          });
  }])
  .controller('movieCtrl', ['app', '$scope', '$rootScope', '$routeParams', 'getMovie', 
      function(app, $scope, $rootScope, $routeParams, getMovie) {
        var path = app.location.path().slice(1).split('/');
        getMovie(path[1]).then(function (data){
            
        });
        $scope.hots = path;
  }])
  .controller('hotCtrl', ['$scope',function($scope) {
        $scope.hots = 'this is hot';
  }]);
