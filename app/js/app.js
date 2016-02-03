(function() {
    angular.module('NoteWrangler', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/pages/notes/index.html'
                })
                .when('/notes', {
                    templateUrl: 'templates/pages/notes/index.html'
                })
                .when('/users/', {
                    templateUrl: 'templates/pages/users/index.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
