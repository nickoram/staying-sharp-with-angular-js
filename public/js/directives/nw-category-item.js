(function() {
    angular.module('NoteWrangler')
        .directive('nwCategoryItem', function() {
            return {
                restrict: 'E',
                require: '^nwCategorySelect',
                templateUrl: 'templates/directives/nw-category-item.html',
                scope: {
                    category: '='
                },
                link: function(scope, element, attrs, nwCategorySelectCtrl) {
                    scope.isActive = function() {
                        return nwCategorySelectCtrl.getActiveCategory() === scope.category.name;
                    };
                    scope.makeActive = function() {
                        nwCategorySelectCtrl.setActiveCategory(scope.category);
                    };
                }
            };
        });
})();
