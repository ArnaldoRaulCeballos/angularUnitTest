describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));
  beforeEach(module('ngRoute'));
  beforeEach(module('angular-md5'));
//  beforeEach(module('restangular'));         // No tiene dependencias
//  beforeEach(module('ui.bootstrap'));        // Tiene dependencias
//  beforeEach(module('ngFileUpload'));        // No tiene dependencias
//  beforeEach(module('checklist-model'));     // No tiene dependencias
//  beforeEach(module('angularModalService')); // No tiene dependencias 

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));

  it("should create a name with Arnaldo Ceballos", inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});
    expect(scope.name).toBe("Arnaldo Ceballos");
    }));
});