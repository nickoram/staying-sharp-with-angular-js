(function() {
    angular.module('NoteWrangler')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/notes'
                })
                .when('/notes', {
                    templateUrl: 'templates/pages/notes/index.html',
                    controller: 'NotesIndexController',
                    controllerAs: 'notesIndexCtrl'
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
