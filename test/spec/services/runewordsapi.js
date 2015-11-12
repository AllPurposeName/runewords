'use strict';

describe('Service: RunewordsAPI', function () {

  // load the service's module
  beforeEach(module('runewordsApp'));

  // instantiate service
  var RunewordsAPI;
  beforeEach(inject(function (_RunewordsAPI_) {
    RunewordsAPI = _RunewordsAPI_;
  }));

  it('should do something', function () {
    expect(!!RunewordsAPI).toBe(true);
  });
});
