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
        case 'docx':
          return 'fa fa-file-word-o'
          break;
        case 'xls':
        case 'xlsx':
          return 'fa fa-file-excel-o'
          break;
        case 'pdf':
          return 'fa fa-file-pdf-o'
          break;
        case 'mln':
          return 'fa fa-mail-forward'
          break;
        case 'png':
        case 'jpg':
          return 'fa fa-picture-o'
          break;
        case 'msg':
          return 'fa fa-envelope-o'
          break;
        case 'txt':
          return 'fa fa-file-text-o'
          break;
        case 'zip':
        case 'rar':
          return 'fa fa-file-archive-o'
          break;
        default:
          return 'fa fa-file-o'
      }
    };
  }
})

