'use strict';

/**
 * @ngdoc function
 * @name hyenaAppsApp.controller:NewappCtrl
 * @description
 * # NewappCtrl
 * Controller of the hyenaAppsApp
 */
angular.module('hyenaAppsApp')
  .controller('NewCtrl', function ($scope, AppService, Notification) {
    $scope.app = {};

    $scope.createApp = function() {
    	AppService.add($scope.app).then(function(response) {
    		var appId = response.data.id;
    		//Set the app as active and push it onto the local app array
    		$scope.app.active = 1;
    		$scope.currentUser.apps.push($scope.app);

    		//Redirect and notify
    		$scope.go('app/'+appId);
    		Notification.show('Your app has been created successfully!', 'success');
    	}, function(error) {
    		console.log('Create App Error', error);
    		Notification.show('There was an error creating your app.', 'error');
    	});
    };
  });
