(function() {
    angular.module('NoteWrangler')
        .directive('nwCategorySelect', function(Category) {
            return {
                replace: true,
                restrict: "E",
                templateUrl: "templates/directives/nw-category-select.html",
                scope: {
                    activeCategory: '='
                },
                controller: function($scope) {
                    this.getActiveCategory = function() {
                        return $scope.activeCategory;
                    };
                    this.setActiveCategory = function(category) {
                        $scope.activeCategory = category && category.name;
                    };
                },
                link: function(scope, element, attrs) {
                    Category.all()
                        .success(function(data) {
                            scope.categories = data;
                        });
                }
            };
        });
})();
