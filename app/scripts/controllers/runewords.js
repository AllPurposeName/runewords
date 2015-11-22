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
            function (RunewordsAPI, ItemTypeAPI) {
  var vm = this;
  vm.name = 'Runewords';
  vm.currentId = null;
  vm.all = RunewordsAPI.get();
  vm.itemTypes = ItemTypeAPI.get();
  vm.itemType = 'All item types';
  vm.itemTypeSelect = '';

  vm.setItemType = function(type) {
    vm.itemType = type;
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
