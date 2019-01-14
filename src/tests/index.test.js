const exported = require('../index');

describe('exported', () => {
  Object.keys(exported).forEach((key) => {
    it(`${key} should be defined`, () => {
      expect(exported[key]).toBeDefined();
    });
  });
});
