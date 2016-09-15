restaurant.controller('reviewCtrl', function ($scope, $ionicModal, $timeout) {
  $scope.ratingsObject = {
    iconOn: 'ion-ios-star',    //Optional
    iconOff: 'ion-ios-star-outline',   //Optional
    iconOnColor: 'rgb(61, 111, 137)',  //Optional
    iconOffColor: 'rgb(157, 149, 115)',    //Optional
    rating: 1, //Optional
    minRating: 1,    //Optional
    readOnly: true, //Optional
    callback: function (rating) {    //Mandatory
      $scope.ratingsCallback(rating);
    }
  };

  $scope.ratingsCallback = function (rating) {
    console.log('Selected rating is : ', rating);
  };

  $ionicModal.fromTemplateUrl('templates/modal/modal-review.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function () {
    $timeout(function () {
      $scope.modal.show();
    }, 1000)
  };

  $scope.closeModal = function () {
    $scope.modal.hide();
  };

});
