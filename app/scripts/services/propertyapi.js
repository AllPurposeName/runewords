'use strict';

/**
 * @ngdoc service
 * @name runewordsApp.PropertyAPI
 * @description
 * # PropertyAPI
 * Factory in the runewordsApp.
 */
var apiBaseUrl = 'http://runewords-api.herokuapp.com/api/v1/';

angular.module('runewordsApp')
.factory('PropertyAPI', function ($resource) {
  return $resource(apiBaseUrl + 'properties');
});
