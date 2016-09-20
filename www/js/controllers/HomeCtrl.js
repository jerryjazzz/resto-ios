<<<<<<< HEAD
restaurant.controller('HomeCtrl', function ($scope, $rootScope, $state, CommunicationServerService) {
  $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation'));
  $rootScope.choiceUser = {};
  $scope.displayChoiceUser = function (kitchenName) {
    console.log("$scope.choiceUser === ", $scope.choiceUser);
    console.log("kitchenName === ", kitchenName);
  };
=======
restaurant.controller('HomeCtrl', function($scope, $rootScope, $state, CommunicationServerService) {
        $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation'));
        $scope.choiceUser = {};
        $scope.displayChoiceUser = function(kitchenName) {
            console.log("$scope.choiceUser === ", $scope.choiceUser);
            console.log("kitchenName === ", kitchenName);
        };
>>>>>>> 91dc202b85cca5a1c5e0fdcd56a6e9ceb9f78b42

  $scope.getCities = function () {
    CommunicationServerService.getCities($rootScope.userDataReservation.userToken).then(function (responseServerCities) {
      // console.log("$scope.getCities === ", responseServerCities);
      $scope.cities = responseServerCities.data.data.data;
      console.log("$scope.cities === ", $scope.cities);
    }).finally(function () {
    });
    console.log("$scope.choiceUser === ", $scope.choiceUser);
  };

  $scope.getKitchens = function (cityName) {
    CommunicationServerService.getKitchens($rootScope.userDataReservation.userToken, cityName).then(function (responseServerKitchens) {
      // console.log("$scope.getKitchens === ", responseServerKitchens);
      $scope.kitchens = responseServerKitchens.data.data.data;
      console.log("$scope.kitchens === ", $scope.kitchens);
    }).finally(function () {
    });
    console.log("$scope.choiceUser === ", $scope.choiceUser);
  };

<<<<<<< HEAD
  $scope.getRestaurants = function (kitchenName, choiceUserCity) {
    console.log("kitchenName, $scope.choiceUser.sity === ", kitchenName, choiceUserCity);
    CommunicationServerService.getRestaurants($rootScope.userDataReservation.userToken, choiceUserCity, kitchenName).then(function (responseServerRestaurants) {
      // console.log("$scope.getRestaurants = function() === ", responseServerRestaurants);
      $scope.restaurants = responseServerRestaurants.data.data.data;
      console.log("$scope.restaurants === ", $scope.restaurants);
    }).finally(function () {
    });
    console.log("$scope.choiceUser === ", $scope.choiceUser);
  };
=======
    $scope.getRestaurants = function(kitchenName, choiceUserCity) {
            console.log("kitchenName, choiceUserCity === ", kitchenName, choiceUserCity);
        CommunicationServerService.getRestaurants($rootScope.userDataReservation.userToken, choiceUserCity, kitchenName).then(function(responseServerRestaurants) {
            // console.log("$scope.getRestaurants = function() === ", responseServerRestaurants);
            $scope.restaurants = responseServerRestaurants.data.data.data;
            console.log("$scope.restaurants === ", $scope.restaurants);
        }).finally(function() {});
            console.log("$scope.choiceUser === ", $scope.choiceUser);
    };
>>>>>>> 91dc202b85cca5a1c5e0fdcd56a6e9ceb9f78b42

  $scope.selectRestaurant = function (restaurantName) {
    $rootScope.selectedRestaurant = restaurantName;
  };
})
