// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','starter.controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('fc', function($scope) {
   $scope.myName = "gautham",

    $scope.sessionDetails = {
      "id" : sessionStorage.getItem('loggedin_id'),
      "name"  : sessionStorage.getItem('loggedin_user'),
      "status" : sessionStorage.getItem('loggedin_status')
   };
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  

.state('tabxs', {
url:'/tab',
cache:'false',
controller: 'CredCtrl',
templateUrl:function(){

if(sessionStorage.getItem('loggedin_status')){
 return 'notice.html';
}else{
  return 'login.html';
}
}
})
 .state('tabxs.general', {
      url: '/general',
      views: {
        'notice-g-tab': {
          templateUrl: 'general.html',
        }
      }
    })  
    .state('tabxs.personal', {
      url: '/personal',
      views: {
        'notice-p-tab': {
          templateUrl: 'personal.html'
   }
  }
})




    .state('hcc', {
      url: '/hcc',
      controller: 'TabsCtrl',
      templateUrl: 'pages/hcc.html'
    })


  
     .state('contacts', {
      url: '/contacts',
      controller: 'TabsCtrl',
      templateUrl: 'pages/contacts.html'
    })
    .state('rulebook', {
      url: '/rulebook',
      controller: 'TabsCtrl',
      templateUrl: 'pages/rulebook.html'
    })
    .state('gatekeeper', {
      url: '/gatekeeper',
      controller: 'TabsCtrl',
      templateUrl: 'pages/gatekeeper.html'
    })
    .state('visitors', {
      url: '/visitors',
      controller: 'TabsCtrl',
      templateUrl: 'pages/visitorslist.html'
    })
    .state('profile', {
      url: '/profile',
      controller: 'TabsCtrl',
      templateUrl: 'pages/profile.html'
    })
    .state('help', {
      url: '/help',
      controller: 'helpCtrl',
      templateUrl: 'pages/help.html'
    })






    // .state('login', {
    //   url: '/login',
    //   controller: 'CredCtrl',
    //   templateUrl: 'login.html'
    // })
    

    // start admin chat wall
       .state('acw', {
      url: '/acw',
      controller: 'TabsCtrl',
      templateUrl: 'tabs/chat_admin.html'
    })
    .state('acw.chat_admin', {
      url: '/chat_admin',
      views: {
        'chat_admin-tab': {
          templateUrl: 'tabs/chat_admin.html'
        }
      }
    })
    .state('acw.chat_super_admin', {
      url: '/chat_super_admin',
      views: {
        'chat_super_admin-tab': {
          templateUrl: 'tabs/chat_super_admin.html'
        }
      }
    })

    // finish admin chat wall


    ;
 
  $urlRouterProvider.otherwise('/tab');
});