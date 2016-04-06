'use strict';

/**
 * @ngdoc service
 * @name moviesApp.MyFactory
 * @description
 * # MyFactory
 * Factory in the moviesApp.
 */
angular.module('moviesApp')
  .factory('MyFactory', function ($resource) {
    // Service logic
    return $resource("http://127.0.0.1:8085/movies/:id",{id: "@_id"},
    {



    	update:
    }

        method: 'PUT'


    	}});
    
  });
