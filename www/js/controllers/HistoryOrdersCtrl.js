restaurant.controller('HistoryOrdersCtrl', function ($scope, $ionicPopup) {
  $scope.cancelOrder = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: '',
      template: 'Вы точно хотите отменить заказ в Ресторане "Обедофф"?',
      buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: 'Да',
        type: 'button-positive',
        onTap: function () {
        }
      }, {
        text: 'Нет',
        type: 'button-default',
        onTap: function () {
        }
      }]
    });

    confirmPopup.then(function (res) {
      if (res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };
});
