'use strict';

angular.module('app').factory('userService', userService);

function userService(configurationResource, $q) {
  return {
    getAvatar : getAvatar,
  };

  function getAvatar(userId){
    var d = $q.defer();

    configurationResource.get({
      user : userId
    }, function(data) {
      d.resolve(data[0].avatar);
    })
    return d.promise;
  }
}