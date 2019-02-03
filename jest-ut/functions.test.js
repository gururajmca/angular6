const functions = require('./functions');

//Sample Add test
test('Add 2 + 3 to equals 5', () => {
  expect(functions.add(2,3)).toBe(5);
});

//Not matcher
test('Add 2 + 3 to not equals 5', () => {
  expect(functions.add(2,4)).not.toBe(5);
});

// Check for NULL
test('check for isNull', () => {
  expect(functions.isNull()).toBeNull();
});

// Check for Object Matcher
test('check user object', () => {
  expect(functions.creareUser()).toEqual({
    firstName:'Gururaj',
    lastName:'Naik'
  });
});

// Check for <
test('check for lesserthan', () => {
  const num1 = 4;
  const num2 = 3;
  expect(num1+num2).toBeLessThan(10);
});

//Arrays
test('Check user name contains aditi', ()=> {
  expect(functions.getAllUsers()).toContain('aditi');
});

//Arrays
test('Check user name contains admin', ()=> {
  expect(functions.getAllUsers()).not.toContain('admin');
});

//Regx
test('Check admin contains i/I', ()=> {
  expect('admin').toMatch(/I/i);
});
