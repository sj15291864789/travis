jest.dontMock('../src/sum');

describe('sum', function() {
  it('', function() {
    var sum = require('../src/sum');
    expect(sum(1, 2), 3)
  });
});
