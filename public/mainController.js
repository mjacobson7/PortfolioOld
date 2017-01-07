angular.module('myPortfolio', ['ngTouch'])
  .controller('mainController', function($scope, $http) {

    $scope.sendMessage = function(user) {
      return $http({
        method: 'POST',
        url: '/api/sendmail',
        data: user
      }).then(function(response) {
        swal({
          title: 'You Rock!',
          text: "Your message has been sent!",
          type: 'success',
          confirmButtonColor: '#35a49d',
        })
      })
    }


  }); //end
