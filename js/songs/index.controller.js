/* global angular */
angular
  .module('radio')
  .controller('SongsIndexController', [
    'songs',
    SongsIndexController
  ])

function SongsIndexController (Song) {
  this.songs = Song.query()
}
