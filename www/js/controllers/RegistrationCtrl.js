restaurant.controller('RegistrationCtrl', function($scope, $rootScope, $state, $cordovaOauth, CommunicationServerService, $ionicPopup, $ionicModal, $timeout, $http) {
    $scope.formAuth = false;
    $scope.initialization = function() {
        $scope.showLoading();
        $rootScope.userDataReservation = localStorage.getItem('userDataReservation') || { userToken: undefined };
        console.log("$rootScope.userDataReservation", $rootScope.userDataReservation);

        if ($rootScope.userDataReservation != "undefined") {
            $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation')) || { userToken: undefined };
        }
        console.log("$rootScope.userDataReservation", $rootScope.userDataReservation);

        $timeout(function() {
            if ($rootScope.userDataReservation.userToken == undefined) {
                $scope.formAuth = true;
                // $location.path('app/registration');
                $scope.hideLoading();
            } else {
                $state.go("tab.home");
                $scope.hideLoading();
            }
        }, 1000);
    };

    $scope.logInWithVK = function() {
        console.log("$scope.logInWithVK");
        VK.init({
            apiId: 5618507
        });

        VK.Auth.getLoginStatus(function(response) {
            if (response.session) {
                /* Авторизованный в Open API пользователь, response.status="connected" */
                alert("Авторизованный в Open API пользователь, response.status='connected'= " + JSON.stringify(response));

                console.log("Авторизованный в Open API пользователь, response.status='connected'= " + response.session.sid);
                CommunicationServerService.LogInSocial('vk', response.session.sid).then(function(responseServer) {
                    console.log("CommunicationServerService.LogInSocial('vk', response.session.sid).then(function(responseServer) === ", responseServer);
                    /*if (responseServer.status == 200) {
                        $rootScope.userDataReservation.access_token = responseServer.data.access_token;
                        localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
                        // $state.go("who_are_you");
                        $scope.GreetingLogIn($scope.welcomeUserName);
                    }*/
                }).finally(function() { $scope.hideLoading(); });
            } else {
                // Неавторизованный в Open API пользователь,  response.status="not_authorized"
                console.log("Авторизованный в Open API пользователь, response.status='not_authorized'= " + response.session);
                VK.Auth.login(function(response) {
                    if (response.session) {
                        /* Пользователь успешно авторизовался */
                        alert("Авторизованный в Open API пользователь, response.session= " + JSON.stringify(response));
                        if (response.settings) {
                            /* Выбранные настройки доступа пользователя, если они были запрошены */
                        }
                    } else {
                        /* Пользователь нажал кнопку Отмена в окне авторизации */
                        console.log("Пользователь нажал кнопку Отмена в окне авторизации ");
                    }
                });
            }
        })
    };

    $scope.logInWithFacebook = function() {
        console.log("$scope.logInWithFacebook");
        if (!(ionic.Platform.isIOS() || ionic.Platform.isAndroid())) {
            console.log("ionic.Platform.isIOS(), ionic.Platform.isAndroid()", ionic.Platform.isIOS(), ionic.Platform.isAndroid());
            $scope.logInWithFacebookWeb();
        } else {
            console.log("ionic.Platform.isIOS(), ionic.Platform.isAndroid()", ionic.Platform.isIOS(), ionic.Platform.isAndroid());
            $scope.logInWithFacebookPhone();
        }
    };

    $scope.logInWithFacebookPhone = function() {
        $scope.showLoading();
        $cordovaOauth.facebook("287939498251944", ["email", "public_profile"]).then(function(response) {
            alert("response.access_token" + response.access_token);

            /*$http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: response.access_token, fields: "id,name,gender", format: "json" } }).then(function(result) {
                // $scope.profileData = result.data;
                alert("https://graph.facebook.com/v2.2/me" + result.data.name);
                $state.go("who_are_you");
                $scope.hideLoading();
            }, function(error) {
                alert("There was a problem getting your profile.  Check the logs for details.");
                alert(error);
            });*/

            CommunicationServerService.LogInSocial('fb', response.access_token).then(function(responseServerLogin) {
                console.log("CommunicationServerService.LogInFacebook().then(function(responseServerLogin) === ", responseServerLogin);

                if (responseServerLogin.status == 200) {
                    // $rootScope.userDataReservation.access_token = responseServerLogin.data.access_token;
                    CommunicationServerService.getAccount(responseServerLogin.data.access_token).then(function(responseServerAccount) {
                        console.log("CommunicationServerService.getAccount().then(function(responseServerAccount) === ", responseServerAccount);
                        $rootScope.userDataReservation = responseServerAccount.data.user;
                        localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
                        $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation'));
                    }).finally(function() { $scope.hideLoading(); });
                    // localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
                    // $state.go("who_are_you");
                    // $scope.GreetingLogIn($scope.welcomeUserName);
                    $state.go('who_are_you');
                }
            }).finally(function() { $scope.hideLoading(); });
            // $localStorage.accessToken = response.access_token;
            // $location.path("/profile");
        }, function(error) {
            alert("There was a problem signing in! " + error);
            console.log(error);
            $scope.hideLoading();
        });
    };

    $rootScope.userDataReservation = {};
    $scope.logInWithFacebookWeb = function() {
        // console.log('logInWithFacebook = function()');
        $scope.showLoading();

        window.fbAsyncInit = function() {
            FB.init({
                appId: '287939498251944',
                xfbml: true,
                version: 'v2.7'
            });

            FB.getLoginStatus(function(response) {
                console.log('FB.getLoginStatus(function(response) === ', response);
                if (response.status === 'connected') {
                    console.log('Logged in.');
                    CommunicationServerService.LogInSocial('fb', response.authResponse.accessToken).then(function(responseServerLogin) {
                        console.log("CommunicationServerService.LogInFacebook().then(function(responseServerLogin) === ", responseServerLogin);

                        if (responseServerLogin.status == 200) {
                            // $rootScope.userDataReservation.access_token = responseServerLogin.data.access_token;
                            CommunicationServerService.getAccount(responseServerLogin.data.access_token).then(function(responseServerAccount) {
                                console.log("CommunicationServerService.getAccount().then(function(responseServerAccount) === ", responseServerAccount);
                                $rootScope.userDataReservation = responseServerAccount.data.user;
                                localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
                                $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation'));

                            }).finally(function() { $scope.hideLoading(); });
                            // localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
                            // $state.go("who_are_you");
                            // $scope.GreetingLogIn($scope.welcomeUserName);
                            $state.go('who_are_you');
                        }
                    }).finally(function() { $scope.hideLoading(); });
                } else {
                    FB.login(function(authResponse) {
                        console.log('FB.login(function(authResponse) === ', authResponse);
                        FB.api('/me', function(response) {
                            console.log('Successful login for: ' + response.name);
                            $scope.welcomeUserName = response.name;

                        });
                        console.log('authResponse.authResponse.accessToken === ', authResponse.authResponse.accessToken);
                        CommunicationServerService.LogInSocial('fb', authResponse.authResponse.accessToken).then(function(responseServerLogin) {
                            console.log("CommunicationServerService.LogInFacebook().then(function(responseServerLogin) === ", responseServerLogin);

                            if (responseServerLogin.status == 200) {
                                CommunicationServerService.getAccount(responseServerLogin.data.access_token).then(function(responseServerAccount) {
                                    console.log("CommunicationServerService.getAccount().then(function(responseServerAccount) === ", responseServerAccount);
                                    $rootScope.userDataReservation = responseServerAccount.data.user;
                                    localStorage.setItem('userDataReservation', JSON.stringify($rootScope.userDataReservation));
                                    $rootScope.userDataReservation = JSON.parse(localStorage.getItem('userDataReservation'));

                                }).finally(function() { $scope.hideLoading(); });
                                $state.go("who_are_you");
                            }
                        }).finally(function() { $scope.hideLoading(); });
                    });
                }
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        $scope.hideLoading();
    };

    /* $ionicModal.fromTemplateUrl('modal/loginEmail.html', {
         scope: $scope,
         animation: 'slide-in-up'
     }).then(function(modal) {
         $scope.modalLoginEmail = modal;
     });
     $scope.openModalLoginEmail = function() {
         $scope.modalLoginEmail.show();
     };
     $scope.closeModalLoginEmail = function() {
         $scope.modalLoginEmail.hide();
     };*/
    $scope.userAuthData = {};
    $scope.logInWithEmail = function() {
        var mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(mail.test($scope.userAuthData.email))) {
            $scope.errorEmail = true;
        } else {
            $scope.displayDivCode = true;
        }
    };

    $scope.goToHome = function() {
        $state.go("tab.home");
    };

    $scope.goRegEmail = function() {
        $state.go("po_email");
    };

    $scope.goRegTel = function() {
        $state.go("po_tel");
    };
});
