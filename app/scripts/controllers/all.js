'use strict';

/**
 * @ngdoc function
 * @name amdminsApp.controller:AllCtrl
 * @description
 * # AllCtrl
 * Controller of the amdminsApp
 */
angular.module('amdminsApp')
  .controller('AllCtrl', function(testconnect) {
    var all = this;
    var user_login = "demoIikoCheckList@demo.net";
    var user_secret ="demo357123";
    testconnect.connect().then(function(res){
      all.contecst = res.data;
    });
    testconnect.token(user_login, user_secret).then(function(res){
      all.token = res.data.accessToken ;
      all.org = res.data.organizationInfo.id;
    });
  });
