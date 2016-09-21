restaurant.controller('ProfileCtrl', function ($scope, $ionicPopup) {
  $scope.editUser = function () {
    var myPopup = $ionicPopup.show({
      template: '<input type="text" style="border: 1px solid #cfcfcf;">',
      title: 'Введите новые данные',
      scope: $scope,
      buttons: [
        {text: 'Отменить'}, {
          text: '<b>Сохранить</b>',
          type: 'button-positive',
          onTap: function () {
          }
        }
      ]
    });
    myPopup.then(function (res) {
      console.log('Tapped!', res);
    });
    //$timeout(function () {
    //  myPopup.close();
    //}, 3000);
  };
});


