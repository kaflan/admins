'use strict';

/**
 * @ngdoc directive
 * @name amdminsApp.directive:contecst
 * @description
 * # contecst
 */
angular.module('amdminsApp')
  .directive('contecst', function () {
    return {
      scope: {
        contecst: "=",
        token: "=",
        org: "="
      },
      replace: true, // Replace with the template below
      transclude: true,
      controller:'ContecstCtrl',
      controllerAs: 'self',
      templateUrl: 'views/contecst.html',
      restrict: 'E',
      link: function (scope) {
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
