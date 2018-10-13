angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

// $scope.names= $http.get("https://cincysaitemple.org/menu.json")
  
  ///////////////////////
$scope.names = [
	{name:'Home',country:'https://cincysaitemple.org/'},
	{name:'Canendar',country:'https://cincysaitemple.org/calendar/'},
	 {name:'priest-service',country:'https://cincysaitemple.org/priest-service/'},
	 {name:'daily-pooja-services',country:'https://cincysaitemple.org/daily-pooja-services/'},
	 {name:'charity',country:'https://cincysaitemple.org/charity/'},
	 {name:'vastralankar',country:'https://cincysaitemple.org/vastralankar/'},
	 {name:'Donations',country:'https://cincysaitemple.org/donate-2/'},
	 {name:'Signup',country:'https://cincysaitemple.org/signup/'},
	 {name:'Signup as Sai Sevak',country:'https://docs.google.com/forms/d/e/1FAIpQLSei82Lnz6Lq2fq5W9VHUK1wJv1CzYwtmSTBQ7V-j2WwSbL_qA/viewform'},
	 {name:'Library Sevak',country:'https://docs.google.com/forms/d/e/1FAIpQLSeP8FhCT5qq_gjd7gImipR7IsydFRPCqOlpfquV9AYEZ6ebNg/viewform'},
	 {name:'Contact Us',country:'https://cincysaitemple.org/contact/'},
	 {name:'Membership',country:'https://cincysaitemple.org/membership-form/'},
	 {name:'Galery',country:'https://cincysaitemple.org/gallery/'}
	
    ];

$scope.saisitepopup = function(url)
{
 // Open in app browser

 window.open(url,'_blank'); 
};
	
$scope.openInExternalBrowser = function()
{

 window.open('https://cincysaitemple.org/','_blank'); 
};

  ///////////////////////
  
  
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
