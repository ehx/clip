'use strict';

angular.module('app').constant('RESOURCES', {
    'SERVER': 'http://localhost:8000'
});

angular.module('app').config(configFunction);

function configFunction($httpProvider, $authProvider, $resourceProvider, uiSelectConfig, $routeProvider) {

    /**
     * Helper auth functions
     */
    var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }];

    $authProvider.loginUrl = "http://localhost:8000/api-token-auth/";
    $authProvider.signupUrl = "http://localhost:8000/auth/register/";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "clip";
    $authProvider.tokenHeader = 'Authorization';
    $authProvider.tokenType = 'Bearer';


    uiSelectConfig.theme = 'bootstrap';
    uiSelectConfig.resetSearchInput = true;
    uiSelectConfig.appendToBody = true;

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider
        .when('/', {
            templateUrl: 'taskList.html',
            controller: 'taskController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/task/:taskId/', {
            templateUrl: 'taskDetail.html',
            controller: 'commentsController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/taskhistory/', {
            templateUrl: 'taskHistory.html',
            controller: 'taskHController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/todo/', {
            templateUrl: 'todo.html',
            controller: 'todoController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/messages/', {
            templateUrl: 'messages.html',
            controller: 'messagesController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/login/', {
            templateUrl: 'login.html',
            controller: 'LoginController',
        })

        .when('/register/', {
            templateUrl: 'register.html',
            controller: 'SignUpController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/configuration/', {
            templateUrl: 'userConfiguration.html',
            controller: 'configController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/tips/', {
            templateUrl: 'tips.html',
            controller: 'tipController',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .when('/test/', {
            templateUrl: 'test.html',
            resolve: {
                skipIfLoggedIn: loginRequired
            }
        })

        .otherwise({
            redirectTo: '/login/'
        });
}

app.config(['$httpProvider', '$authProvider', function ($httpProvider, config) {
    $httpProvider.interceptors.push(['$q', function ($q) {
        var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
        return {
            request: function (httpConfig) {
                var token = localStorage.getItem(tokenName);
                if (token && config.httpInterceptor) {
                    token = config.tokenHeader === 'Authorization' ? 'JWT ' + token : token;
                    httpConfig.headers[config.tokenHeader] = token;
                }
                return httpConfig;
            },
            responseError: function (response) {
                return $q.reject(response);
            }
        };
    }]);
}]);