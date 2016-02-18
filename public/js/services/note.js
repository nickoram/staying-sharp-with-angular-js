(function() {
    angular.module('NoteWrangler')
        .factory('Note', function NoteFactory($http) {
            return {
                all: function() {
                    return $http({method: 'GET', url: '/data/notes.json'});
                },
                create: function(note) {
                    return $http({method: 'POST', url: '/notes', data: note});
                },
                show: function(id) {
                    return $http({method: 'GET', url: '/notes/' + id});
                }
            };
        });
})();
