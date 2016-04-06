'use strict';

describe('Controller: ViewmoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var ViewmoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewmoviesCtrl = $controller('ViewmoviesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewmoviesCtrl.awesomeThings.length).toBe(3);
  });
});
