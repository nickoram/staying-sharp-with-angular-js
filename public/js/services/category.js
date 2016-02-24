(function() {
    angular.module('NoteWrangler')
        .factory('Category', function CategoryFactory($http) {

            return {
                all: function() {
                    return $http({method: 'GET', url: '/data/category.json'});
                }
            };

        });
})();
