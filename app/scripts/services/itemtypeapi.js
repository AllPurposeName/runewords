'use strict';

/**
 * @ngdoc service
 * @name runewordsApp.ItemTypeAPI
 * @description
 * # ItemTypeAPI
 * Factory in the runewordsApp.
 */
var apiBaseUrl = 'http://runewords-api.herokuapp.com/api/v1/';

angular.module('runewordsApp')
  .factory('ItemTypeAPI', function ($resource) {
  return  $resource(apiBaseUrl + 'item_types');
  });
