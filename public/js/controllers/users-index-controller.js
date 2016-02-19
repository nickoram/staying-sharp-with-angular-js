(function() {
    angular.module('NoteWrangler')
        .controller('UsersIndexController', function($scope, User, Gravatar) {
            $scope.notes = [];

            User.all()
                .success(function(data) {
                    $scope.users = data;
                });

            $scope.gravatarUrl = Gravatar.generate;
        });
})();
