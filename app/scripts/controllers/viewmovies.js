'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:ViewmoviesCtrl
 * @description
 * # ViewmoviesCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
  .controller('ViewmoviesCtrl', function ($scope,$routeParams,MyFactory) {
    $scope.movie_id = $routeParams._id;//receive the route parameter
       MyFactory.get({ id: $scope.movie_id}, function(response){
         //here we pass a movie id & get a response - Object
            $scope.moviedetails = response;      
       	}); 
  });
