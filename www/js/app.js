// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
	  
	    // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("ee5ab1ae-557f-4588-8655-0d345f28b99f")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  
  
    .state('app.myprofile', {
    url: '/myprofile',
    views: {
      'menuContent': {
        templateUrl: 'templates/myprofile.html'
      }
    }
  })
   .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
   .state('app.activeevents', {
    url: '/activeevents',
    views: {
      'menuContent': {
        templateUrl: 'templates/activeevents.html'
      }
    }
  })
     .state('app.donations', {
    url: '/donations',
    views: {
      'menuContent': {
        templateUrl: 'templates/donations.html'
      }
    }
  })
     .state('app.dandia', {
    url: '/dandia',
    views: {
      'menuContent': {
		//  https://cincysaitemple.org/product/dandiya-2018/
        templateUrl: 'templates/dandia.html'
      }
    }
  })
     .state('app.services', {
    url: '/services',
    views: {
      'menuContent': {
        templateUrl: 'templates/services.html'
      }
    }
  })
     .state('app.membership', {
    url: '/membership',
    views: {
      'menuContent': {
        templateUrl: 'templates/membership.html'
      }
    }
  })
     .state('app.calendar', {
    url: '/calendar',
    views: {
      'menuContent': {
        templateUrl: 'templates/calendar.html'
      }
    }
  })
     .state('app.library', {
    url: '/library',
    views: {
      'menuContent': {
        templateUrl: 'templates/library.html'
      }
    }
  })
     .state('app.serviceopportunities', {
    url: '/serviceopportunities',
    views: {
      'menuContent': {
        templateUrl: 'templates/serviceopportunities.html'
      }
    }
  })
     .state('app.gallery', {
    url: '/gallery',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery.html'
      }
    }
  })
     .state('app.panchangam', {
    url: '/panchangam',
    views: {
      'menuContent': {
        templateUrl: 'templates/panchangam.html'
      }
    }
  })
     .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html'
      }
    }
  })
     .state('app.feedback', {
    url: '/feedback',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedback.html'
      }
    }
  })
      


    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/services');
});
