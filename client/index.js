(function(){
  'use strict';

  angular.module('weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .otherwise({redirectTo:'/conditions'});
  }])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Weather';
  }]);
})();

