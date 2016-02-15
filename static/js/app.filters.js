'use strict';

// momentJs
angular.module('app').filter('moment', function() {
  return function(dateString, format) {
    moment.locale('es');
    return moment(dateString).format(format);
  };
})

angular.module('app').filter('momentNow', function() {
  return function(dateString) {
    moment.locale('es');
    return moment(dateString).fromNow();
  };
})

// convert in html safe
angular.module('app').filter('rawHtml', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})

// show the last word in the text
angular.module('app').filter('lastWord', function($sce) {
  return function(txt) {
    if (txt) {
      var txtCut = txt.split("/");
      return txtCut[txtCut.length - 1];
    } else {
      return false;
    }
  };
})

// shows icon file extesion
angular.module('app').filter('extension', function($sce) {
  return function(txt) {
    if (txt) {
      var txtCut = txt.split(".");
      switch (txtCut[txtCut.length - 1]) {
        case 'doc':
          return 'fa fa-file-word-o'
          break;
        case 'pdf':
          return 'fa fa-file-pdf-o'
          break;
        case 'mln':
          return 'fa fa-mail-forward'
          break;
        case 'png':
          return 'fa fa-picture-o'
          break;
        default:
          return 'fa fa-file-o'
      }
    };
  }
})