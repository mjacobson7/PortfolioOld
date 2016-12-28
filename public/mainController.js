angular.module('myPortfolio', [])
  .controller('mainController', function($scope, $interval, $timeout) {

    function repeat() {

      $timeout(function() {
        $scope.test1 = 'test';
      }, 500);
      $timeout(function() {
        $scope.test1 = 'remove';
      }, 8500);

      $timeout(function() {
        $scope.test2 = 'test';
      }, 9500);
      $timeout(function() {
        $scope.test2 = 'remove';
      }, 18500);

      $timeout(function() {
        $scope.test3 = 'test';
      }, 19500);
      $timeout(function() {
        $scope.test3 = 'remove';
      }, 28500);

    $interval(function() {

    $timeout(function() {
      $scope.test1 = 'test';
    }, 500);
    $timeout(function() {
      $scope.test1 = 'remove';
    }, 8500);

    $timeout(function() {
      $scope.test2 = 'test';
    }, 9500);
    $timeout(function() {
      $scope.test2 = 'remove';
    }, 18500);

    $timeout(function() {
      $scope.test3 = 'test';
    }, 19500);
    $timeout(function() {
      $scope.test3 = 'remove';
    }, 28500);

  }, 29500);
}

repeat();



  }); //end
