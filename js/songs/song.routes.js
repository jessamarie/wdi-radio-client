/* global angular */

angular
.module('radio')
.config([
  '$stateProvider',
  Router
])

function Router ($stateProvider) {
  $stateProvider
  // Add a state for the routes / and /songs
  .state('songsIndex', {
    url: '/songs',
    templateUrl: 'js/songs/ng-views/index.html',
    controller: 'SongsIndexController',
    controllerAs: 'vm'
  })
}
