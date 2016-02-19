(function() {
    angular.module('NoteWrangler')
        .controller('NotesShowController', function($scope, $routeParams, Note, Tweetable) {

            $scope.errors = null;

            Note.show($routeParams.id)
                .success(function(data) {
                    $scope.note = data;
                })
                .catch(function(data) {
                    data.message = "We expect to fail as we have no API " +
                        "to call. Enter express js stage left."
                    $scope.errors = data;
                });

            $scope.tweetThat = function(description) {
                Tweetable.tweetThat(description)
                    .success(function(data) {
                        console.log(data);
                    });
            };
        });
})();
