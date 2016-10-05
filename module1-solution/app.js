(function(){
'use strict';
angular.module("WordCount", [])

.controller("WordCountController",  WordCountController);
WordCountController.$inject = ['$scope'];

function WordCountController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.checkNumberOfItems = function(){
      var items = $scope.items.split(',');
      numberOfItems = 0;
      items.forEach(function(word){
        if(word.trim().length >= 2){
          numberOfItems++;
        }
      });
      if(numberOfItems === 0){
        $scope.message = "Please provide some words";
      } else if(numberOfItems >= 1 && numberOfItems <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too many";
      }
    }
  }
})();
