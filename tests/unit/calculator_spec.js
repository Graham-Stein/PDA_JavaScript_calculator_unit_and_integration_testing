var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  });

  it('should add numbers', function(){
    calculator.previousTotal = 1;
    const testAdd4 = calculator.add('4');
    assert.equal(5, calculator.runningTotal);
  });

  it('should subtract numbers', function() {
    calculator.previousTotal = 7;
    const testSubtract4 = calculator.subtract('4');
    assert.equal(3, calculator.runningTotal)
  });

  it('should multiply numbers', function() {
    calculator.previousTotal = 3;
    const testMultiply5 = calculator.multiply('5');
    assert.equal(15, calculator.runningTotal);
  });

  it('should divide numbers', function() {
    calculator.previousTotal = 21;
    const divideBy7 = calculator.divide('7');
    assert.equal(3, calculator.runningTotal);
  });

  it('should concatenate multiple digit numbers in entry field', function() {
    calculator.numberClick('1');
    calculator.numberClick('0');
    const testConcat = calculator.numberClick('10');
    assert.equal(1010, calculator.runningTotal);
  });

  it('should chain multiple operations together', function() {
    calculator.numberClick('1');
    calculator.numberClick('0');
    calculator.operatorClick ('+');
    calculator.numberClick('20');
    calculator.operatorClick ('/');
    calculator.numberClick('10');
    calculator.operatorClick ('=');
    assert.equal(3, calculator.runningTotal);
  });

  it('should allow clear function to clear number from running total without clearing function in process', function() {
    calculator.numberClick('1');
    calculator.numberClick('0');
    calculator.operatorClick ('+');
    calculator.numberClick('20');
    calculator.clearClick();
    calculator.numberClick('10');
    calculator.operatorClick('=');
    assert.equal(20, calculator.runningTotal);
  });
});
