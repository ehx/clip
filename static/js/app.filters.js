'use strict';

// momentJs
angular.module('app').filter('moment', function() {
  return function(dateString, format) {
    return moment(dateString).format(format);
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

// colors for events!
angular.module('app').filter('date_color', function($sce) {
  return function(date) {
    var season = "";
    var date_edit = new Date(date);
    switch (date_edit.getMonth()) {
      case "12":
      case "1":
      case "2":
        season = "winter";
        break;
      case "3":
      case "4":
      case "5":
        season = "spring";
        break;
      case "6":
      case "7":
      case "8":
        season = "summer";
        break;
      case "9":
      case "10":
      case "11":
        season = "autumn";
        break;

      return season;
    }
  }
})