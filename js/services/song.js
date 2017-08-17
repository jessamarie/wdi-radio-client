/* global angular */
angular
  .module('radio')
  .factory('songs', [
    '$resource',
    songsService
  ])

function songsService ($resource) {
  return $resource('http://localhost:3000/songs.json')
}
