// test   capitalizeFirst.test.js
const assert = require('assert');
const capitalizeFirst = require('../capitalizeFirst');

describe("capitalizeFirst", () => {
   it('is a function accepting one argument', () => {
       assert.strictEqual(typeof capitalizeFirst, 'function');
       assert.strictEqual(capitalizeFirst.length, 1);
   });
    it('transforms javaScript correctly', () => {
       assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
   });

   it('works with a 1-character string', () => {
       assert.strictEqual(capitalizeFirst('z'), 'Z');
   });

   it('works with an empty string', () => {
      assert.strictEqual(capitalizeFirst(''), '');
   });
});