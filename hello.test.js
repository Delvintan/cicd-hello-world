const hello = require('./hello');

test('should return Hello World', () => {
  expect(hello()).toBe("Hello World");
});