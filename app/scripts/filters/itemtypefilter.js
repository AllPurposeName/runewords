'use strict';

/**
 * @ngdoc filter
 * @name runewordsApp.filter:ItemTypeFilter
 * @function
 * @description
 * # ItemTypeFilter
 * Filter in the runewordsApp.
 */
angular.module('runewordsApp')
.filter('ItemTypeFilter', function () {
  return function (input) {
    input  = input || '';
    var defaultSetting = 'All item types';
    var filteredOutput;
    if (input === defaultSetting) {
      return '';
    }
    // for (var i = 0; i < runewords.length; i++) {
    //   var runeword = runewords[i];
    //   var itemTypes = runeword['item_types']
    //     for (var j = 0; j < itemTypes.length; i++) {
    //       if (itemTypes[j] === input) {
    //         filteredOutput.push(runeword);
    //       }
    //     }
    // }
    //
    return filteredOutput;
  };
});
