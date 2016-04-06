'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:AddmovieCtrl
 * @description
 * # AddmovieCtrl
 * Controller of the moviesApp
 */
angular.module('moviesApp')
    .controller('AddmovieCtrl', function($scope,MyFactory) {
     $scope.movie = new MyFactory();
        $scope.saveMovie = function() {
            //create a new resource using your movie object

           console.log($scope.movie);

           //this will pass a post to your api  
            $scope.movie.$save(function() {
                   
            });
    
               alert("record saved:-)");
         };
    });
