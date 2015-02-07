'use strict';

/**
 * @ngdoc overview
 * @name hyenaCheckpointsApp
 * @description
 * # hyenaCheckpointsApp
 *
 * Main module of the application.
 */
angular
  .module('hyenaAppsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'firebase',
    'angularMoment',
    'angularFileUpload',
    'hyenaAngular'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'DashboardCtrl'
      })
      .when('/app/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/upload', {
        template: '',
        controller: function() {
          console.log('Upload controller');
        }
      })
      .when('/app/:appId', {
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  })
  .config(function ($httpProvider) {
    //$httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push([
      '$injector',
      function ($injector) {
        return $injector.get('AuthInterceptor');
      }
    ]);
  })
  .constant('FBURL', 'https://hyena-apps.firebaseio.com/')
  .constant('APIKEY', 'NDBlZGMyZTNmZWU0YzQzYTkwMGRiZTA5')
  .constant('APIPATH', 'http://st-studio.unl.edu/hyena_platform/public/api/1.0/')
  .constant('PLATFORM_ROOT', 'http://st-studio.unl.edu/hyena_platform/public/')
  .constant('angularMomentConfig', {
    //timezone: 'America/Chicago'
  })
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
  });