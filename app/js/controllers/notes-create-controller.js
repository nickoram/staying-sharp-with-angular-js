(function() {
    angular.module('NoteWrangler')
        .controller('NotesCreateController', function($scope, Note) {
            $scope.createNote = function(note) {
                Note.create(note);
            }
        });
})();
