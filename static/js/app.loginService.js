'use strict';

angular.module('app').factory('loginService', loginService);

function loginService($http, $location, localStorageService, toaster, RESOURCES, configurationResource, $q) {
  return {
    login : login,
    getUser : getUser,
    getUserId : getUserId,
    getAvatar : getAvatar,
    getUsername : getUsername,
    resetPassword : resetPassword,
    logout : logout
  };

  function login() {
    var data_login = localStorageService.get('data_login');

    $http.post(RESOURCES.SERVER + '/auth/login/', data_login).then(function(result){
      localStorageService.remove('data_login');
      localStorageService.set('token', result.data.auth_token);

      // obtengo token de auth
      $http.defaults.headers.common.Authorization = 'Token ' + result.data.auth_token;

      // obtengo datos del usuario y los guardo en un storage local
      $http.get(RESOURCES.SERVER + '/auth/me/').then(function(user){
        localStorageService.set('user', user);

        // redirigo la ruta
        return $location.path( "/" );
      });
    }, function() {
    	// login erroneo , muestra error
      return Materialize.toast('Los datos ingresados son incorrectos.', 2000, '');
    });
  }

  function getUser(){
    var user = localStorageService.get('user');
    var d = $q.defer();

    if(user){
      configurationResource.query({
        user : user.data.id
      }, function(data) {
        user.data['avatar'] = data[0].avatar;
        d.resolve(user.data);
      })
      return d.promise;
    }

    d.reject('no data');
    return d.promise;

  }

  function getAvatar(userId){
    var d = $q.defer();

    configurationResource.query({
      user : userId
    }, function(data) {
      d.resolve(data.avatar);
    })
    return d.promise;
  }

  function getUserId() {
    var user = localStorageService.get('user');
    if(user){
      return user.data.id;  
    }
    return 0;
  }

  function getUsername() {
    var user = localStorageService.get('user');
    if(user){
      return user.data.username;
    }
    return '';
  }

  //TODO
  function resetPassword(){
     $http.post(RESOURCES.SERVER + '/auth/logout/').then(function(){
      localStorageService.remove('user');
      return Materialize.toast('Se envio un mail con el reseteo del password.', 2000, '');
    })
  }

  function logout(){
    $http.post(RESOURCES.SERVER + '/auth/logout/').then(function(){
      localStorageService.remove('user');
      localStorageService.remove('token');
      return $location.path( "/login" );
    })
    $http.defaults.headers.common['Authorization'] = ''
  }
}