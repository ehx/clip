'use strict';

angular.module('app').factory('userService', userService);

function userService(configurationResource, $q) {
  return {
    getAvatar : getAvatar,
  };

  function getAvatar(userId){
    var d = $q.defer();

    configurationResource.query({
      user : userId
    }, function(data) {
      d.resolve(data.avatar);
    })
    return d.promise;
  }
}