'use strict';

/**
 * @ngdoc service
 * @name amdminsApp.changeOrCreateTask
 * @description
 * # changeOrCreateTask
 * Factory in the amdminsApp.
 */
angular.module('amdminsApp')
  .factory('changeOrCreateTask', function ($http) {
    // Service logic
    // ...
    // Public API here
    return {
      changeContext: function (id, token,context) {
        return $http.post('http://iikochecklist.iiko.ru:8096'+'/api/0/check_list/change_or_create_context/access_token='+token+'&org_id='+ id,
         context).
          then(function(res){
              console.log(res);
          });
      },
      createContext: function(id,token, context){
        return $http.post('http://iikochecklist.iiko.ru:8096'+'/api/0/check_list/change_or_create_context/access_token='+token+'&org_id='+ id,
         context).
          then(function(res){
              console.log(res);
          });
      }
    };
  });
