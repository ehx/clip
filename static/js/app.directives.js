'use strict';

angular.module('app').directive('jqdatepicker', ['$timeout', function(disableKeyPress) {
  return {
    link: function(scope, element, attrs) {
      var format = element.attr('format');
      if (format == undefined || format == null || format.trim() == '') {
        format = "yy-mm-dd";
      }
      var defaultDate = new Date();
      var maxDate = null;
      if (attrs.minDate != undefined) {
        var sDate = attrs.minDate;
        var yr = parseInt(sDate.substring(0, 4));
        var mnth = parseInt(sDate.substring(5, 7));
        var dt = parseInt(sDate.substring(8, 10));
        defaultDate = new Date(yr, mnth - 1, dt);
        if (attrs.planDuration != undefined) {
          maxDate = new Date(defaultDate.getTime() + (parseInt(attrs.planDuration) * 7 * 86400000));
        }
      }

      element.datepicker({
        dateFormat: format,
        onSelect: function(dateText) {
          var modelPath = $(this).attr('ng-model');
          var expression = attrs.ngModel + "=" + "'" + dateText + "'";
          scope.$apply(expression);
          element.focus();
        }
      });
      var keypressdisable = function() {
        element.keydown(function(key) {
          return false;
        })
      };
      disableKeyPress(keypressdisable, 0);
    }
  }
}])

angular.module('app').directive('ngConfirmClick', [
  function() {
    return {
      link: function(scope, element, attr) {
        var msg = attr.ngConfirmClick || "Desea confirmar la accion?";
        var clickAction = attr.confirmedClick;
        element.bind('click', function(event) {
          if (window.confirm(msg)) {
            scope.$eval(clickAction)
          }
        });
      }
    };
  }
])

angular.module('app').directive('fileModel', ['$parse', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.fileModel);
      var modelSetter = model.assign;

      element.bind('change', function() {
        scope.$apply(function() {
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}])

angular.module('app').directive('avatarModel', ['$parse', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var model = $parse(attrs.avatarModel);
      var modelSetter = model.assign;

      element.bind('change', function() {
        scope.$apply(function() {
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}])

angular.module('app').directive('icheck', iCheck);

iCheck.$inject = ['$timeout'];

function iCheck($timeout) {

  var directive = {
    restrict: 'A',
    require: 'ngModel',

    scope: {
      model: '=ngModel'
    },

    link: linkFn
  };
  return directive;

  function linkFn(scope, element, attrs, ngModel) {

    $timeout(function() {
      $(element).iCheck({
          checkboxClass: 'icheckbox_flat-green',
          radioClass: 'iradio_flat-green'
        })
        .on('ifChanged', onChanged);
      update(ngModel.$modelValue);
    });

    var watchModel = scope.$watch(function() {
      return ngModel.$modelValue;
    }, update);

    scope.$on('$destroy', function() {
      watchModel();
    });

    function update(value) {
      if (attrs.type == 'checkbox') {
        $(element).iCheck('update');
      }
    }

    function onChanged(event) {
      if (attrs.type == 'checkbox') {
        ngModel.$setViewValue(event.target.checked);
      }

      if (attrs.type == 'radio') {
        ngModel.$setViewValue(event.target.value);
      }
    }
  }
}


angular.module('app').directive('exportTable', exportTable);

function exportTable() {
  var link = function($scope, elm, attr) {
    $scope.$on('export-pdf', function(e, d) {
      elm.tableExport({
        type: 'pdf',
        escape: false,
        pdfLeftMargin: 20,
        separator: ';'
      });
    });
    $scope.$on('export-excel', function(e, d) {
      elm.tableExport({
        type: 'excel',
        escape: false,
        separator: ';'
      });
    });
    $scope.$on('export-doc', function(e, d) {
      elm.tableExport({
        type: 'doc',
        escape: false,
        separator: ';'
      });
    });
  }
  return {
    restrict: 'C',
    link: link
  }
}

angular.module('app').service('fileUpload', ['$http', function($http) {
  this.uploadFileToUrl = function(taskId, userId, comment, file, uploadUrl) {
    var fd = new FormData();
    fd.append('task', taskId);
    fd.append('user', userId);
    fd.append('comment', comment);

    if (file) {
      fd.append('docfile', file);
    }

    $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined
      }
    })
  }
}])

angular.module('app').service('avatarUpload', ['$http', function($http) {
  this.uploadFileToUrl = function(data, file, uploadUrl) {
    var fd = new FormData();
    fd.append('organization', data.organization);
    fd.append('user', data.user.id)
    if (file) {
      fd.append('avatar', file);
    }

    $http.put(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined
      }
    })
  }
}])

angular.module('app').directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        var $el = angular.element("div[contenteditable=true]");
        $("body").animate({scrollTop: $el.offset().top}, "slow");
      });
    }
  }
});