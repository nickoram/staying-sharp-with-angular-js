(function() {
    angular.module('NoteWrangler')
        .factory('Note', function NoteFactory($http) {
            return {
                all: function() {
                    // return something cool
                },
                create: function(note) {
                    return $http({method: 'POST', url: '/app/notes', data: note});
                }
            };
        });
})();
