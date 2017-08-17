/* global angular */

angular
.module('radio')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  Router
])

function Router ($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Add a state for the routes / and /songs
  .state('songsIndex', {
    url: '/songs',
    templateUrl: 'js/songs/ng-views/index.html',
    controller: 'SongsIndexController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/songs')
}
