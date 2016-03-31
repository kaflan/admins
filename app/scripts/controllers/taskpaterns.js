'use strict';

/**
 * @ngdoc function
 * @name amdminsApp.controller:TaskpaternsCtrl
 * @description
 * # TaskpaternsCtrl
 * Controller of the amdminsApp
 */
angular.module('amdminsApp')
  .controller('TaskpaternsCtrl', function(changeOrCreateTask) {
    var self = this;
    self.modalShown = false;
    self.active = false;
    self.toggleModal = function() {
      self.modalShown = !self.modalShown;
    };
    self.createContekst = function(org, token){
      if(self.name&&token){
        // changeOrCreateTask.changeContext(token, org, {name: self.name, id:self.id, active:  self.ative});
      }
      self.toggleModal();
    };
    self.changeContext = function(id, name , active, token, org){
      self.name = name;
      self.id = id;
      self.ative = active;
        // changeOrCreateTask.createContext(token, org, {name: self.name, id:self.id, active:  self.ative});
      self.toggleModal();
    };
  });
