/* global angular */

angular
.module('radio')
.config([
  '$stateProvider',
  Router
])

function Router ($stateProvider) {
  $stateProvider
  .state('songsIndex', {
    url: '/songs',
    templateUrl: './ng-views/index.html',
    controller: 'SongsIndexController',
    controllerAs: 'vm'
  })
}
