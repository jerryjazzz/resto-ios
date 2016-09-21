restaurant.constant('ROUTES', (function() {
    return {
        API: 'http://restoran.returnt.ru'
    };
})())

restaurant.config(function($stateProvider, $urlRouterProvider,  $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $stateProvider
    .state('registration', {
      url: '/registration',
      templateUrl: 'templates/registration.html',
      controller: 'RegistrationCtrl'
    })

    .state('who_are_you', {
      url: '/who_are_you',
      templateUrl: 'templates/who_are_you.html',
      controller: 'RegistrationCtrl'
    })

    .state('po_email', {
      url: '/po_email',
      templateUrl: 'templates/avtorizaciya_po_email.html',
      controller: 'RegistrationCtrl'
    })

    .state('po_tel', {
      url: '/po_tel',
      templateUrl: 'templates/avtorizaciya_tel.html',
      controller: 'RegistrationCtrl'
    })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

    .state('tab.history_orders', {
      url: '/history_orders',
      views: {
        'tab-history_orders': {
          templateUrl: 'templates/history_orders.html',
          controller: 'HistoryOrdersCtrl'
        }
      }
    })

    .state('tab.favourite', {
      url: '/favourite',
      views: {
        'tab-favourite': {
          templateUrl: 'templates/favourite.html',
          controller: 'FavouriteCtrl'
        }
      }
    })

    .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/tab-profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })

    .state('tab.restaurant', {
      url: '/restaurant',
      views: {
        'tab-home': {
          templateUrl: 'templates/restaurant.html',
          controller: 'restaurantCtrl'
        }
      }
    })

    .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-home': {
          templateUrl: 'templates/menu.html',
          //controller: 'menuCtrl'
        }
      }
    })

    .state('tab.interior', {
      url: '/interior',
      views: {
        'tab-home': {
          templateUrl: 'templates/interior.html',
          //controller: 'menuCtrl'
        }
      }
    })

    .state('tab.shares', {
      url: '/shares',
      views: {
        'tab-home': {
          templateUrl: 'templates/shares.html',
          //controller: 'menuCtrl'
        }
      }
    })

  .state('tab.review', {
    url: '/review',
    views: {
      'tab-home': {
        templateUrl: 'templates/review.html',
        controller: 'reviewCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/registration');
});
