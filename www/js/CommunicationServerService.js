restaurant.factory('CommunicationServerService', function($rootScope, ROUTES, $http) {
    return {
        LogInSocial: function(socialType, access_token) {
            return $http.get(ROUTES.API + '/login?social=' + socialType + '&access_token=' + access_token).success(function(data) {
                console.log("Login: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("Login: function() --- error(function(data)", error);
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
        getRestaurants: function(access_token, sity, kitchenName) {
                console.log("access_token, sity, kitchenName", access_token, sity, kitchenName);
            return $http.get(ROUTES.API + '/restoran?access_token='+access_token + '&where[city]='+sity+'&where[citchen]='+kitchenName).success(function(data) {
                // console.log("getRestaurants: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("getRestaurants: function() --- error(function(data)", error);
            });
        },
        getRestaurantInfo: function(access_token, id) {
            return $http.get(ROUTES.API + '/restoran/?access_token=' + access_token + '&where[id]=' + id).success(function(data) {
                console.log("getRestaurantInfo: function() --- success(function(data)", data);
                return data;
            }).error(function(error) {
                console.log("getRestaurantInfo: function() --- error(function(data)", error);
            });
        }
    }
});
