'use strict';

angular.module('app').constant('RESOURCES', {
  'SERVER': 'http://localhost:8000',
});

angular.module('app').config(configFunction);

function configFunction($httpProvider, $resourceProvider, localStorageServiceProvider, uiSelectConfig, $routeProvider) {
  var onlyLoggedIn = function($location, localStorageService, $http) {
    if (localStorageService.get('token')) {
      $http.defaults.headers.common.Authorization = 'Token ' + localStorageService.get('token');
      return true;
    } else {
      $location.url('/login');
    }
  };

  uiSelectConfig.theme = 'bootstrap';
  uiSelectConfig.resetSearchInput = true;
  uiSelectConfig.appendToBody = true;

  localStorageServiceProvider.setPrefix('clip_');

  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  $resourceProvider.defaults.stripTrailingSlashes = false;

  $routeProvider
    .when('/', {
      templateUrl: 'taskList.html',
      controller: 'taskController',
      resolve: {
        loggedIn: onlyLoggedIn
      }
    })

  .when('/task/:taskId/', {
    templateUrl: 'taskDetail.html',
    controller: 'commentsController',
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .when('/taskhistory/', {
    templateUrl: 'taskHistory.html',
    controller: 'taskHController',
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .when('/todo/', {
    templateUrl: 'todo.html',
    controller: 'todoController',
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .when('/messages/', {
    templateUrl: 'messages.html',
    controller: 'messagesController',
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .when('/login/', {
    templateUrl: 'login.html',
    controller: 'loginController'
  })

  .when('/configuration/', {
    templateUrl: 'userConfiguration.html',
    controller: 'configController',
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .when('/tips/', {
    templateUrl: 'tips.html',
    controller: 'tipController',
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .when('/test/', {
    templateUrl: 'test.html',
    
    resolve: {
      loggedIn: onlyLoggedIn
    }
  })

  .otherwise({
    redirectTo: '/login/'
  });
};