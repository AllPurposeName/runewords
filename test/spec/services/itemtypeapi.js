'use strict';

describe('Service: ItemTypeAPI', function () {

  // load the service's module
  beforeEach(module('runewordsApp'));

  // instantiate service
  var ItemTypeAPI;
  beforeEach(inject(function (_ItemTypeAPI_) {
    ItemTypeAPI = _ItemTypeAPI_;
  }));

  it('should do something', function () {
    expect(!!ItemTypeAPI).toBe(true);
  });

});
