'use strict';

angular.module('app').factory('notificationService', notificationService);

function notificationService(notificationResource) {
  return {
    getAllNotifications : getAllNotifications,
  };

  function getAllNotifications(userId) {
    return notificationResource.get({
      read: 'False',
      userN: userId
    }).$promise;
  }
}