'use strict';

/* Controllers */

angular.module('moivego.controllers', [])
  .controller('indexCtrl', ['app', '$scope', '$rootScope', '$location', '$timeout','getList',
        function(app, $scope, $rootScope, $location, $timeout, getList) {
          getList('rating').then(function (data) {
              $scope.topMovies = data.slice(0, 28);
          });
  }])
  .controller('movieCtrl', ['$scope',function($scope) {
        $scope.hots = 'this is hot';
  }])
  .controller('hotCtrl', ['$scope',function($scope) {
        $scope.hots = 'this is hot';
  }]);
