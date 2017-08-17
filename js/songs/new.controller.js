/* global angular */
angular
  .module('radio')
  .controller('SongsNewController', [
    'songs',
    '$state',
    SongsNewController
  ])

function SongsNewController (Song, $state) {
  this.song = new Song()
  this.create = function () {
    this.song.$save(() => {
      $state.go('songsIndex')
    })
  }
}
