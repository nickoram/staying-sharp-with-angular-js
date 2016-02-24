(function() {
    angular.module('NoteWrangler')
        .directive('nwCategorySelect', function(Category) {
            return {
                replace: true,
                restrict: "E",
                templateUrl: "templates/directives/nw-category-select.html",
                link: function(scope, element, attrs) {
                    Category.all()
                        .success(function(data) {
                            scope.categories = data;
                        });
                }
            };
        });
})();
