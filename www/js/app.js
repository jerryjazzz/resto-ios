var restaurant = angular.module('restaurant', ['ionic', 'ngCordova', 'ionic-ratings'])

.run(function($ionicPlatform, $rootScope, $state, $ionicHistory, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.goBack = function() {
        $ionicHistory.goBack();
    };

    $rootScope.showLoading = function() {
        $ionicLoading.show({
                template: '<ion-spinner icon="bubbles"></ion-spinner>',
                showBackdrop: true
                // duration: 3000
            }

            /*{
    content: '<i class="icon ion-loading-c"></i>',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 50,
    showDelay: 0
  }*/
        );
    };

    $rootScope.hideLoading = function() {
        $ionicLoading.hide();
    };

    $rootScope.logOut = function() {
        /*$rootScope.userDataFOOTT.accessToken = undefined;
        localStorage.setItem("userDataFOOTT", JSON.stringify($rootScope.userDataFOOTT));*/
        localStorage.setItem("userDataFOOTT", undefined);
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $state.go("log_in");
        // $ionicSideMenuDelegate.toggleLeft();
    };
})

