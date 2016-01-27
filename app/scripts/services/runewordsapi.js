'use strict';

/**
 * @ngdoc service
 * @name runewordsApp.runewordsAPI
 * @description
 * # runewordsAPI
 * Factory in the runewordsApp.
 */
var apiBaseUrl = 'https://runewords-api.herokuapp.com/api/v1/';

angular.module('runewordsApp')
.factory('RunewordsAPI', function($resource) {
  return $resource(apiBaseUrl + 'runewords');
});
