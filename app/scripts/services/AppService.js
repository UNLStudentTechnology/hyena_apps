'use strict';

/**
 * @ngdoc service
 * @name hyenaAppsApp.AppService
 * @description
 * # AppService
 * Service in the hyenaAppsApp.
 */
angular.module('hyenaAppsApp')
  .service('AppService', function AppService($http, $upload, PLATFORM_ROOT, AuthService) {
  	var tokenString = '?token='+AuthService.authToken();

  	return {
  		get: function getApp(appId) {
			return $http.get(PLATFORM_ROOT+'apps/'+appId+tokenString);
		},
		update: function updateApp(appId, appData) {
			return $http.put(
				PLATFORM_ROOT+'apps/'+appId+tokenString, appData);
		},
		add: function addApp(appData) {
			return $http.post(
				PLATFORM_ROOT+'apps'+tokenString, appData);
		},
		remove: function removeApp(appId) {
			return $http.delete(PLATFORM_ROOT+'apps/'+appId+tokenString);
		},
		uploadImage: function uploadImage(appId, file) {
			return $upload.upload({
	          url: PLATFORM_ROOT+'apps/'+appId+'/image'+tokenString,
	          method: 'POST',
	          file: file
	        });
		}
  	};
  });