const assert = require('assert');
const sinon = require('sinon');
const calculateNumber = require('./0-calcul');

describe('calculateNumber by rounding them', function() {
	it('should return sum of a, b', function (){
		const calculate = sinon.spy(calculateNumber);
		const result = calculate(1, 2);
		assert.equal(calculate.calledOnce, true);
		assert.equal(result, 3);
	});
	it ('should return sum of round a and b', function () {
		const calculate = sinon.spy(calculateNumber);
		const result = calculate(1.4, 3);
		assert.equal(calculate.calledOnce, true);
		assert.equal(result, 4);
	});
	it ('should return sum of a and round b', function () {
		const calculate = sinon.spy(calculateNumber);
		const result = calculate(1, 3.2);
		assert.equal(calculate.calledOnce, true);
		assert.equal(result, 4);
	});
	it ('should return sum of both round a and b', function (){
		const calculate = sinon.spy(calculateNumber);
		const result = calculate(1.6, 3.5);
		assert.equal(calculate.calledOnce, true);
		assert.equal(result, 6);
	});
})
