describe('myDirective Unit Testing', function() {
    var mockElement;
    var mockScope;

    beforeEach(module('myApp'));

    beforeEach(inject(function($compile, $rootScope) {
        mockScope = $rootScope.$new();
        mockElement = angular.element(
                '<my-directive message="note"></my-directive>');
        $compile(mockElement)(mockScope);
        mockScope.$apply();
    }));
    
    it('should display the welcome text', function() {
        mockScope.$apply(function() {
            mockScope.note = "Welcome to Danang Javascript";
        });
        expect(mockElement.html()).toContain("Welcome to Danang Javascript");
    });
});
