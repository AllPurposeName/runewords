'use strict';

describe('Controller: RunewordsCtrl', function () {

  // load the controller's module
  beforeEach(module('runewordsApp'));

  var RunewordsCtrl,
  scope,
    $q,
    mockRunewordsAPI,
      mockRunewordsResponse,
      getDeferred;

  // Initialize the controller and a mock scope
  mockRunewordsAPI  = {
    get: function() {
      getDeferred = $q.defer();
      return {$promise: getDeferred.promise};
    }
  };

  beforeEach(inject(function ($controller, $rootScope, _$q_) {
    scope = $rootScope.$new();
    $q = _$q_;
    RunewordsCtrl = $controller('RunewordsCtrl', {
      $scope: scope,
      RunewordsAPI: mockRunewordsAPI
    });
  }));

  it('should identify itself', function() {
    expect(RunewordsCtrl.name).toBe('Runewords');
  });

  it('should begin with a null currentId', function() {
    expect(RunewordsCtrl.currentId).toBe(null);
  });

  it('should set the currentId from the view', function() {
    RunewordsCtrl.selectId(7);

    expect(RunewordsCtrl.currentId).toBe(7);
  });

  it('should deselect the currentId, making it null again', function() {
    RunewordsCtrl.selectId(1);
    RunewordsCtrl.clearId();

    expect(RunewordsCtrl.currentId).toBe(null);
  });

  describe('runewordsApiService.get', function() {
    beforeEach(function() {
      getDeferred.resolve(mockRunewordsResponse);
      scope.$apply();
    });

    it('should set the response from the RunewordsAPI.get to vm.all', function() {
      expect(scope.all).toEqual(mockRunewordsResponse);
    });
  });
});
