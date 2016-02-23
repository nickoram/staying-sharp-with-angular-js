(function() {
    angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
        .config(function(GravatarProvider) {
            GravatarProvider.setSize(80);
        })
        .config(function(TweetableProvider) {
            TweetableProvider.setLength(160);
        });
})();
