'use strict';

describe('Controller: EditmovieCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var EditmovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditmovieCtrl = $controller('EditmovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditmovieCtrl.awesomeThings.length).toBe(3);
  });
});
