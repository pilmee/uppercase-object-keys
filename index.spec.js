const upperCaseObjectKeys = require('./index');

describe('Test', () => {
  it('should transform the properties in capital letters and not exist the original to be different from it.', () => {
    const testObject = upperCaseObjectKeys({ One: 1, two: 2 });
    expect(testObject.ONE).toBeDefined();
    expect(testObject.TWO).toBeDefined();
    expect(testObject.One).toBeUndefined();
    expect(testObject.two).toBeUndefined();
  });
});
