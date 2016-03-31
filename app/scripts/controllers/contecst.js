'use strict';

/**
 * @ngdoc function
 * @name amdminsApp.controller:ContecstCtrl
 * @description
 * # ContecstCtrl
 * Controller of the amdminsApp
 */
angular.module('amdminsApp')
  .controller('ContecstCtrl', function (changeOrCreateContext) {
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
        // changeOrCreateContext.changeContext(token, org, {name: self.name, id:self.id, active:  self.ative});
        // testconnect.connect();
      }
      self.toggleModal();
    };
    self.changeContext = function(id, name , active, token, org){
      self.name = name;
      self.id = id;
      self.ative = active;
        // changeOrCreateContext.createContext(token, org, {name: self.name, id:self.id, active:  self.ative});
        // testconnect.connect();
      self.toggleModal();
    };
  });
