restaurant.controller('HomeCtrl', function($scope, $rootScope, $state, CommunicationServerService) {
    $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation'));
    $scope.choiceUser = {};


    $scope.getCities = function() {
        CommunicationServerService.getCities($rootScope.userDataReservation.userToken).then(function(responseServerCities) {
            // console.log("$scope.getCities === ", responseServerCities);
            $scope.cities = responseServerCities.data.data.data;
            console.log("$scope.cities === ", $scope.cities);
        }).finally(function() {
            if ($rootScope.userDataReservation.choiceCity) {
                $scope.choiceUser.city = $rootScope.userDataReservation.choiceCity;
                $scope.getRestaurants($scope.choiceUser.city);
            } else {
                $scope.choiceUser.city = "1";
                $scope.getRestaurants($scope.choiceUser.city);
            }

            if ($rootScope.userDataReservation.choiceKitchen) {
                $scope.choiceUser.kitchen = $rootScope.userDataReservation.choiceKitchen;
                $scope.getRestaurants($scope.choiceUser.kitchen);
            } else {
                $scope.choiceUser.kitchen = "1";
                $scope.getRestaurants($scope.choiceUser.kitchen);
            }
        });
        console.log("$scope.choiceUser === ", $scope.choiceUser);
    };

    $scope.getKitchens = function(cityName) {
        CommunicationServerService.getKitchens($rootScope.userDataReservation.userToken, cityName).then(function(responseServerKitchens) {
            // console.log("$scope.getKitchens === ", responseServerKitchens);
            $scope.kitchens = responseServerKitchens.data.data.data;
            console.log("$scope.kitchens === ", $scope.kitchens);
        }).finally(function() {});
        console.log("$scope.choiceUser === ", $scope.choiceUser);
    };

  $scope.getRestaurants = function (choiceUserCity, kitchen_ID) {
    console.log("kitchen_ID, $scope.choiceUser.sity === ", kitchen_ID, choiceUserCity);
    CommunicationServerService.getRestaurants($rootScope.userDataReservation.userToken, choiceUserCity, kitchen_ID).then(function (responseServerRestaurants) {
      // console.log("$scope.getRestaurants = function() === ", responseServerRestaurants);
      $scope.restaurants = responseServerRestaurants.data.data.data;
      console.log("$scope.restaurants === ", $scope.restaurants);
    }).finally(function () {
    });
    console.log("$scope.choiceUser === ", $scope.choiceUser);
  };

    $scope.selectCity = function() {
        $rootScope.userDataReservation.choiceCity = $scope.choiceUser.city;
        localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
      // $scope.choiceUser.city = city_id;
        // console.log("$scope.selectCity = function(city) === ", city);
    };

    $scope.selectKitchen = function() {
      $rootScope.userDataReservation.choiceKitchen = $scope.choiceUser.kitchen;
        localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
        /*console.log("$scope.choiceUser === ", $scope.choiceUser);
        console.log("kitchen_ID === ", kitchen_ID);*/
    };

    $scope.selectRestaurant = function(restaurantName) {
        $rootScope.selectedRestaurant = restaurantName;
    };
})
