(function() {
    angular.module('NoteWrangler')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/pages/notes/index.html'
                })
                .when('/notes', {
                    templateUrl: 'templates/pages/notes/index.html'
                })
                .when('/notes/new', {
                    templateUrl: 'templates/pages/notes/edit.html'
                })
                .when('/users/', {
                    templateUrl: 'templates/pages/users/index.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
