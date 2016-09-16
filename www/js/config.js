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
      'tab-map': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
    .state('tab.restaurant', {
      url: '/restaurant/:id_restaurant',
      views: {
        'tab-map': {
          templateUrl: 'templates/restaurant.html',
          controller: 'restoranCtrl'
        }
      }
    })

    .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-map': {
          templateUrl: 'templates/menu.html',
          //controller: 'menuCtrl'
        }
      }
    })

    .state('tab.interior', {
      url: '/interior',
      views: {
        'tab-map': {
          templateUrl: 'templates/interior.html',
          //controller: 'menuCtrl'
        }
      }
    })

    .state('tab.shares', {
      url: '/shares',
      views: {
        'tab-map': {
          templateUrl: 'templates/shares.html',
          //controller: 'menuCtrl'
        }
      }
    })

  .state('tab.review', {
    url: '/review',
    views: {
      'tab-map': {
        templateUrl: 'templates/review.html',
        controller: 'reviewCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
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
  });

  $urlRouterProvider.otherwise('/registration');
});
