/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', '$http', function($scope, $http){
    $scope.title = 'Webcam shots';


    $scope.getWebcams = function(){
      var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/webcams/q/' + $scope.zip + '.json?callback=JSON_CALLBACK';
      $http.jsonp(url).then(function(response){
        debugger;
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();
