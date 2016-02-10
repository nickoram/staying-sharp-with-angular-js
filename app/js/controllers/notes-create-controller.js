(function() {
    angular.module('NoteWrangler')
        .controller('NotesCreateController', function($http) {
            this.createNote = function(note) {
                $http({method: 'POST', url: '/app/notes', data: note});
            }
        });
})();
