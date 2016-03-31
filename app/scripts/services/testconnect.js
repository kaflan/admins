'use strict';

/**
 * @ngdoc service
 * @name amdminsApp.testconnect
 * @description
 * # testconnect
 * Factory in the amdminsApp.
 */
angular.module('amdminsApp')
  .factory('testconnect', function($http) {
    return {
      connect: function() {
        var user = "demoIikoCheckList@demo.net";
        var secret ="demo357123";
        return $http.get('http://iikochecklist.iiko.ru:8096' + "/api/0/auth/access_token?user_login=" + user + "&user_secret=" + secret).then(function(res) {
          return $http.get('http://iikochecklist.iiko.ru:8096/api/0/check_list/get_nomenclature?access_token=' + res.data.accessToken + '&org_id=' + res.data.organizationInfo.id);
        });
      },
      token: function(user, secret){
        return $http.get('http://iikochecklist.iiko.ru:8096' + "/api/0/auth/access_token?user_login=" + user + "&user_secret=" + secret);
      }
    };
  });
