/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Current Conditions';


    $scope.getConditions = function(){
      var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/conditions/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        debugger;
        $scope.temperature = response.data.current_observation.temp_f;
        $scope.icon_url = response.data.current_observation.icon_url;
        $scope.feelslike_string = response.data.current_observation.feelslike_string;
      });
    };
  }]);
})();
