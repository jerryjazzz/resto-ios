restaurant.controller('restaurantCtrl', function($scope, $rootScope, CommunicationServerService, $stateParams) {
  $scope.getInfoAboutRestoran = function() {
    CommunicationServerService.getRestaurantInfo($rootScope.userDataReservation.userToken, $stateParams.id_restaurant).then(function(responseServerRestaurant) {
            console.log("$scope.getCities === ", responseServerRestaurant);
            $scope.restaurantInfo = responseServerRestaurant.data.data.data;
            console.log("$scope.restaurantInfo === ", $scope.restaurantInfo);
        }).finally(function() {});
  };

  var latLng = new google.maps.LatLng(55.6664507468, 37.7501590167);
  var mapOptions = {
    center: latLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };
  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  google.maps.event.addListenerOnce($scope.map, 'idle', function(){
    var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    var infoWindow = new google.maps.InfoWindow({
      content: "Ресторан Пляж"
    });

    google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
    });
  });

})
