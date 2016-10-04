restaurant.factory('CommunicationServerService', function($rootScope, ROUTES, $http) {
    return {
        LogInSocial: function(socialType, access_token) {
            return $http.get(ROUTES.API + '/login?social=' + socialType + '&access_token=' + access_token).success(function(data) {
                alert("Login: function() --- success(function(data)", JSON.stringify(data));
                return data;
            }).error(function(error) {
                alert("Login: function() --- error(function(data)", JSON.stringify(error));
            });
        },
        LogInEmail: function(email) {
            /*return $http.get(ROUTES.API + '/login?social=' + socialType + '&access_token=' + access_token).success(function(data) {
                console.log("Login: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("Login: function() --- error(function(data)", error);
            });*/
        },
        getAccount: function(access_token) {
            return $http.get(ROUTES.API + '/account?access_token=' + access_token).success(function(data) {
                console.log("getAccount: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("getAccount: function() --- error(function(data)", error);
            });
        },
        getCities: function(access_token) {
            return $http.get(ROUTES.API + '/city?access_token=' + access_token).success(function(data) {
                // console.log("getCities: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("getCities: function() --- error(function(data)", error);
            });
        },
        getKitchens: function(access_token) {
            return $http.get(ROUTES.API + '/kitchen?access_token=' + access_token).success(function(data) {
                // console.log("getKitchens: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("getKitchens: function() --- error(function(data)", error);
            });
        },
        getRestaurants: function(access_token, sity, kitchen_ID) {
            console.log("access_token, sity, kitchen_ID", access_token, sity, kitchen_ID);
            console.log(ROUTES.API + '/restoran?access_token=' + access_token + '&where[city]=' + sity + '&where[kitchen]=' + kitchen_ID);

            if (sity && kitchen_ID) {
                return $http.get(ROUTES.API + '/restoran?access_token=' + access_token + '&where[city]=' + sity + '&where[kitchen]=' + kitchen_ID).success(function(data) {
                    // console.log("getRestaurants: function() --- success(function(data)", data);
                    return data;
                }).error(function(error) {
                    console.log("getRestaurants: function() --- error(function(data)", error);
                });
            } else {
                return $http.get(ROUTES.API + '/restoran?access_token=' + access_token + '&where[city]=' + sity).success(function(data) {
                    // console.log("getRestaurants: function() --- success(function(data)", data);
                    return data;
                }).error(function(error) {
                    console.log("getRestaurants: function() --- error(function(data)", error);
                });
            }
        },
        getRestaurantInfo: function(access_token, restoran_ID) {
            return $http.get(ROUTES.API + '/restoran?access_token=' + access_token + '&where[id]=' + restoran_ID).success(function(data) {
                    // console.log("getRestaurants: function() --- success(function(data)", data);
                    return data;
                }).error(function(error) {
                    console.log("getRestaurants: function() --- error(function(data)", error);
                });
        }
    }
});
