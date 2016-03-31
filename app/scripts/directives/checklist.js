'use strict';

/**
 * @ngdoc directive
 * @name amdminsApp.directive:checkList
 * @description
 * # checkList
 */
angular.module('amdminsApp')
  .directive('checkList', function() {
    return {
      scope:{
        contecst: "=",
        token: "=",
        org: "="
      },
      replace: true, // Replace with the template below
      transclude: true,
      templateUrl: 'views/check.html',
      controller:'CheklistCtrl',
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
