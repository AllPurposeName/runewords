'use strict';

/**
 * @ngdoc function
 * @name runewordsApp.controller:RunewordsCtrl
 * @description
 * # RunewordsCtrl
 * Controller of the runewordsApp
 */
angular.module('runewordsApp')
.controller('RunewordsCtrl', ['RunewordsAPI',
                              'ItemTypeAPI',
                              'PropertyAPI',
            function (RunewordsAPI, ItemTypeAPI, PropertyAPI) {
  // object setup
  var vm            = this;
  vm.name           = 'Runewords';

  // API calls
  vm.all            = RunewordsAPI.get();
  vm.itemTypes      = ItemTypeAPI.get();
  vm.properties     = PropertyAPI.get();

  // View logic
  vm.currentId      = null;
  vm.filterTypes = {
    itemType: '',
    property: ''
  };

  vm.isSelected = function(id) {
    return vm.currentId === id;
  };

  vm.selectId = function(id) {
    return vm.currentId = id;
  };

  vm.clearId = function() {
    return vm.currentId = null;
  };

}]);
