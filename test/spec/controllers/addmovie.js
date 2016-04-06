'use strict';

describe('Controller: AddmovieCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var AddmovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddmovieCtrl = $controller('AddmovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddmovieCtrl.awesomeThings.length).toBe(3);
  });
});
