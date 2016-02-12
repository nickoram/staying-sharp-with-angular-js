(function() {
    angular.module('NoteWrangler')
        .factory('Note', function NoteFactory($http) {
            return {
                all: function() {
                    return $http({method: 'GET', url: '/app/data/notes.json'});
                },
                create: function(note) {
                    return $http({method: 'POST', url: '/app/notes', data: note});
                }
            };
        });
})();
