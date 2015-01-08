'use strict';

/**
 * @ngdoc filter
 * @name hyenaAppsApp.filter:user
 * @function
 * @description
 * # user
 * Filter in the hyenaAppsApp.
 */
angular.module('hyenaAppsApp')
  .filter('user', function (UserService) {
    var userFilter = function (input) {
    	var user = UserService.getUserRelations(input);
    	return input;
    };
    userFilter.$stateful = true;
    return userFilter;
  });
