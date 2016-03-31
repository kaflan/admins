'use strict';

/**
 * @ngdoc directive
 * @name amdminsApp.directive:taskPaterns
 * @description
 * # taskPaterns
 */
angular.module('amdminsApp')
  .directive('taskPaterns', function () {
    return {
      scope:{
        contecst: "=",
        token: "=",
        org: "="
      },
      replace: true, // Replace with the template below
      transclude: true,
      templateUrl: 'views/taskPatterns.html',
      controller: 'TaskpaternsCtrl',
      controllerAs: 'self',
      restrict: 'E',
      link: function(scope, element, attrs) {
        scope.$watch('contecst', function(oldVal, newVal){
          if(oldVal || newVal){
            self.contecst = newVal || oldVal;
          }
        });
        scope.$watch('token', function(oldVal, newVal){
          if(oldVal || newVal){
            self.token = newVal || oldVal;
          }
        });
        scope.$watch('org', function(oldVal, newVal){
          if(oldVal || newVal){
            self.org = newVal || oldVal;
          }
        });
      }
    };
  });
