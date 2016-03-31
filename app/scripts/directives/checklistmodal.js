'use strict';

/**
 * @ngdoc directive
 * @name amdminsApp.directive:checkListModal
 * @description
 * # checkListModal
 */
angular.module('amdminsApp')
  .directive('checkListModal', function () {
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
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };
      }
    };  
  });
