'use strict';

/**
 * @ngdoc function
 * @name runewordsApp.controller:RunewordsCtrl
 * @description
 * # RunewordsCtrl
 * Controller of the runewordsApp
 */
angular.module('runewordsApp')
.controller('RunewordsCtrl', ["RunewordsAPI", function (RunewordsAPI, RunesAPI) {
  var vm = this;
  vm.name = "Runewords";
  vm.currentId = null;
  vm.all = RunewordsAPI.get();

  vm.isSelected = function(id) {
    return vm.currentId === id;
  }

  vm.selectId = function(id) {
    return vm.currentId = id;
  };

  vm.clearId = function() {
    return vm.currentId = null;
  };
}]);
