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
                    scope.makeActive = function() {
                        nwCategorySelectCtrl.setActiveCategory(scope.category);
                    }
                }
            };
        });
})();
