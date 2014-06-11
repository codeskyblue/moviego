'use strict';

/* Controllers */

angular.module('moivego.controllers', [])
  .controller('indexCtrl', ['app', '$scope', '$rootScope', '$location', '$timeout',
        function(app, $scope, $rootScope, $location, $timeout) {
            return $scope.$on("$routeChangeStart",
                function($rootScope, $location) {
                    return $scope.pageClass = $location.pageClass
                }),
                //$scope.emailToolTip = "Hello, World!";
            $scope.signin = function(){
                //console.log(app);
                console.log($scope.user);
                //console.log(app.validate($scope));
            };
  }])
  .controller('hotCtrl', ['$scope',function($scope) {
        $scope.hots = 'this is hot';
  }]);
