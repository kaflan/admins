'use strict';

/**
 * @ngdoc directive
 * @name amdminsApp.directive:taskPaternsModal
 * @description
 * # taskPaternsModal
 */
angular.module('amdminsApp')
  .directive('taskPaternsModal', function () {
    return {
      controller:'',
      controllerAs: '',
      restrict: 'E',
      scope: {
        show: '='
      },
      template:"<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>",
      replace: true, // Replace with the template below
      transclude: true, // we w
    link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.top)
          scope.dialogStyle.top = attrs.top;
        if (attrs.position)
          scope.dialogStyle.position = attrs.position;
        scope.hideModal = function() {
          scope.show = false;
        };
      }
    };
  });
