// test   capitalizeFirstLetter.test.js
const assert = require('assert');
const capitalizeFirstLetter = require('../capitalizeFirstLetter');

describe("capitalizeFirstLetter", () => {
   it('met toutes les premières lettre des mots en majuscule', () => {
      assert.strictEqual(capitalizeFirstLetter('i am learning TDD'), 'I Am Learning TDD');
   });

   it('fonctionne avec un seul mot', () => {
       assert.strictEqual(capitalizeFirstLetter('zèbre'), 'Zèbre');
   });

   it('fonctionne avec une seule lettre', () => {
          assert.strictEqual(capitalizeFirstLetter('a'), 'A');
      });

   it('fonctionne avec une chaine vide', () => {
      assert.strictEqual(capitalizeFirstLetter(''), '');
   });
});