'use strict';

angular.module('app').run(runFunction);

function runFunction(editableOptions) {
  editableOptions.theme = 'bs3';
}