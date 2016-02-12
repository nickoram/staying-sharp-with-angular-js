(function() {
    angular.module('NoteWrangler')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/notes'
                })
                .when('/notes', {
                    templateUrl: 'templates/pages/notes/index.html',
                    controller: 'NotesIndexController'
                })
                .when('/notes/create', {
                    templateUrl: 'templates/pages/notes/create.html',
                    controller: 'NotesCreateController'
                })
                .when('/notes/:id', {
                    templateUrl: 'templates/pages/notes/show.html',
                    controller: 'NotesShowController'
                })
                .when('/users/', {
                    templateUrl: 'templates/pages/users/index.html',
                    controller: 'UsersIndexController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();
