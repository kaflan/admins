'use strict';

/**
 * @ngdoc directive
 * @name amdminsApp.directive:taskFromRang
 * @description
 * # taskFromRang
 */
angular.module('amdminsApp')
  .directive('taskFromRang', function () {
    return {
      templateUrl: 'views/taskfromrang.html',
      restrict: 'E'
    };
  });
