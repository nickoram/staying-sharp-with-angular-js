(function() {
    angular.module('NoteWrangler')
        .controller('NotesShowController', function($http, $routeParams) {
            var controller = this;
            controller.errors = null;

            $http({method: 'GET', url: '/app/notes/' + $routeParams.id})
                .success(function(data) {
                    controller.note = data;
                })
                .catch(function(data) {
                    data.message = "We expect to fail as we have no API " +
                        "to call. Enter express js stage left."
                    controller.errors = data;
                });
        });
})();
