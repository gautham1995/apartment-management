var app = angular.module('starter.controllers', []);

app.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
   $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
});

app.controller('AppCtrl', function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory){
  $scope.doLogout = function(){
      sessionStorage.removeItem('loggedin_status');
        sessionStorage.removeItem('loggedin_id');
        sessionStorage.removeItem('loggedin_user');
        $scope.raja = "kaja raja";
        // $ionicHistory.nextViewOptions({
        //     disableAnimate: true,
        //     disableBack: true,
            
        // });
        
        // $state.go('tabxs',{}, {reload: true, inherit: false});
       

$ionicHistory.clearCache().then(function(){
//   $state.go('app.fooState') 
  $state.go('tabxs',{}, {reload: true, inherit: false});
})


}
});



app.controller('CredCtrl', function($scope,$ionicModal,$ionicSideMenuDelegate,$timeout,$ionicPopup,$http,$state,$ionicHistory) {
var url= "http://localhost/apart/";

$scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }

$scope.loginData = {};

$scope.doLogin = function(){
    var admin_user = $scope.loginData.username;
    var admin_password = $scope.loginData.password;
    

    if(admin_user && admin_password){
    str = url+"login.php?username="+admin_user+"&password="+admin_password;

    $http.get(str)
    .success(function(response){

        $scope.user = response.records;
        sessionStorage.setItem('loggedin_status',true);
        sessionStorage.setItem('loggedin_id',$scope.user.u_id);
        sessionStorage.setItem('loggedin_user',$scope.user.email);
        
        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        })
        
        

        $state.go('tabxs.general',{}, {location:"replace", reload:true});

    })
    .error(function(){
        //alert(str);
         $ionicPopup.alert({
        title: 'fucked',
        template:'wrong username or password'
    })
    })


}else{
    $ionicPopup.alert({
        title: 'nelavanka',
        template:'thongi chusindi'
    })
}
}

});



 
app.controller('helpCtrl', function($scope, $ionicSideMenuDelegate) {
   $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
   $scope.myName = "Chinna Bhaga";
});

app.controller('ModalCtrl', function($scope, $ionicModal) {
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'gautham Freeman' },
    { name: 'ram Calhoun' },
    { name: 'rahim Freeman' },
    { name: 'robert Calhoun' },
    { name: 'sniper Freeman' },
    { name: 'spyder Calhoun' },
    { name: 'flip Freeman' },
    { name: 'flop Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];
  $ionicModal.fromTemplateUrl('snippets/chat_admin_modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.createContact = function(u) {        
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };
});

app.controller('SuperModalCtrl', function($scope, $ionicModal) {
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];
  $ionicModal.fromTemplateUrl('snippets/chat_super_admin_modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.createContact = function(u) {        
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName });
    $scope.modal.hide();
  };
});





app.controller('inModalCtrl', function($scope, $ionicModal) {
  $scope.contacts = [
    { name: 'Gordon Freeman' },
    { name: 'Barney Calhoun' },
    { name: 'gautham Freeman' },
    { name: 'ram Calhoun' },
    { name: 'rahim Freeman' },
    { name: 'robert Calhoun' },
    { name: 'sniper Freeman' },
    { name: 'spyder Calhoun' },
    { name: 'flip Freeman' },
    { name: 'flop Calhoun' },
    { name: 'Lamarr the Headcrab' },
  ];
  $ionicModal.fromTemplateUrl('snippets/index_modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  

});