// test   rectangle.test.js
const assert = require('assert');
const RectangleTest = require('../rectangle.js');

describe("class rectangle", () => {
   it('reconnait un carré', () => {
       var rectangle = new RectangleTest.Rectangle(10, 5);
       assert.strictEqual(rectangle.isSquare(), false);
       var rectangle = new RectangleTest.Rectangle(10, 10);
       assert.strictEqual(rectangle.isSquare(), true);
   });
   it('calcule le perimètre', () => {
          var rectangle = new RectangleTest.Rectangle(8, 3);
          assert.strictEqual(rectangle.getPerimeter(), 22);
   });
   it('calcule de la superficie', () => {
          var rectangle = new RectangleTest.Rectangle(10, 5);
          assert.strictEqual(rectangle.getArea(), 50);
   });
});
