restaurant.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('registration', {
      url: '/registration',
      templateUrl: 'templates/registration.html',
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
  .state('tab.search_in_play', {
    url: '/search_in_play',
    views: {
      'tab-search_in_play': {
        templateUrl: 'templates/tab-search_in_play.html',
        controller: 'Search_in_playCtrl'
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
