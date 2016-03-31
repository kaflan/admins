'use strict';

/**
 * @ngdoc function
 * @name amdminsApp.controller:CheklistCtrl
 * @description
 * # CheklistCtrl
 * Controller of the amdminsApp
 */
angular.module('amdminsApp')
  .controller('CheklistCtrl', function (changeOrCreateCheckList) {
    var self = this;
    self.modalShown = false;
    self.active = false;
    self.toggleModal = function() {
      self.modalShown = !self.modalShown;
    };
    self.createContekst = function(id, name , active,org, token){
      self.name = name;
      self.id = id;
      self.ative = active;
      if(self.name&&token){
        // changeOrCreateCheckList.changeContext(token, org, {name: self.name, id:self.id, active:  self.ative});
      }
      self.toggleModal();
    };
    self.changeContext = function(id, name , active, token, org){
      self.name = name;
      self.id = id;
      self.ative = active;
        // changeOrCreateContext.createContext(token, org, {name: self.name, id:self.id, active:  self.ative});
      self.toggleModal();
    };
  });
