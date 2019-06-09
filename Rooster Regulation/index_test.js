const assert = require('assert'); //import asset module
const Rooster = require('../index'); //import Rooster module

describe('Rooster', () => {
  describe('.announceDawn', () => {
      it('returns a rooster call', () => {
			//Setup: Define expected output
			const expected = 'cock-a-doodle-doo!';
        
      //Exercise: Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn();
        
      //Verify: Use an assert method to compare actual and expected result
      assert.equal(expected,actual);
  		});
  });
  
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //Setup
      const inputNumber = 10;
      const expected = '10';
      
      //Exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      
      //Verify
      assert.equal(expected,actual);
    	});
    
    	it('throws an error if passed a number less than 0', () => {
      //Setup
      const inputNumber = -1;
      const expected = RangeError;
      
      //Verify
      assert.throws(() => {Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
    
      it('throws an error if passed a number greater than 23', () => {
      //Setup
      const inputNumber = -1;
      const expected = RangeError;
      
      //Verify
      assert.throws(() => {Rooster.timeAtDawn(inputNumber);
      }, expected);
    });
  });
});
