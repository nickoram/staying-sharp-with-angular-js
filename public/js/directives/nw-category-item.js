(function() {
    angular.module('NoteWrangler')
        .directive('nwCategoryItem', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/directives/nw-category-item.html',
                scope: {
                    category: '='
                },
                link: function(scope) {
                    console.log(scope.category);
                }
            };
        });
})();
