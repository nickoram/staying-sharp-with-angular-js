(function() {
    angular.module('NoteWrangler')
        .directive('nwCategorySelect', function() {
            return {
                replace: true,
                restrict: "E",
                templateUrl: "templates/directives/nw-category-select.html"
            };
        });
})();
