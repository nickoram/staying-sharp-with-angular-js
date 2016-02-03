(function() {
    angular.module('NoteWrangler', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider.when('/notes', {
                templateUrl: '/app/templates/pages/notes/index.html'
            });
        });
})();
