angular.module('myPortfolio', ['ngTouch'])
  .controller('mainController', function($scope, $http) {

    var sendMessage = function(user) {
      return $http({
        method: 'POST',
        url: '/api/sendmail',
        data: user
      }).then(function(response) {
        $scope.user.name = "";
        $scope.user.email = "";
        $scope.user.message = "";
        $scope.userForm.$setPristine();
        $scope.submitted = false;
        swal({
          title: 'You Rock!',
          text: "Your message has been sent!",
          type: 'success',
          confirmButtonColor: '#35a49d',
        })
      })
    }


    $scope.submitForm = function(isValid) {
      $scope.submitted = true;
      if(isValid) {
        return sendMessage($scope.user);
      }
    }


  }); //end
