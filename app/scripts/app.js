'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 * # moviesApp
 *
 * Main module of the application.
 */
angular
  .module('moviesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/payroll', {
        templateUrl: 'views/payroll.html',
        controller: 'PayrollCtrl',
        controllerAs: 'payroll'
      })
      .when('/addMovie', {
        templateUrl: 'views/addmovie.html',
        controller: 'AddmovieCtrl',
        controllerAs: 'addMovie'
      })


      .when('/viewMovies/:_id', {
        templateUrl: 'views/viewmovies.html',
        controller: 'ViewmoviesCtrl',
        controllerAs: 'viewMovies'
      })
      .when('/editMovie/:_id', {
        templateUrl: 'views/editmovie.html',
        controller: 'EditmovieCtrl',
        controllerAs: 'editMovie'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
