const assert = require('assert');
const sinon = require('sinon');
const calculateNumber = require('./1-calcul');

describe('test 1-calcul for sum, a and b args', function() {
	it('should return sum of a and b', function() {
		const cal = sinon.spy(calculateNumber);
		const result = cal('SUM', 1, 2);
		assert.equal(cal.calledOnce, true);
		assert.equal(result, 3);
	});
	it ('should return sum of round a and b', function() {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM', 1.5, 2);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 4);
	});
	it ('should return sum of a and round b', function() {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM', 1, 2.2);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 3);
	});
	it ('should return sum of both round a and b', function() {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM', 1.1, 2.5);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 4);
	});
        it ('should return NAN if no argumets passed except type', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM');
                assert.equal(cal.calledOnce, true);
                assert.equal(isNaN(result), true);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal();
                assert.equal(cal.calledOnce, true);
                assert.equal(result, undefined);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal(1, 1);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, undefined);
        });

});


describe('test 1-calcul for subtract', function() {
	it('should return difference of a and b', function () {
		const cal = sinon.spy(calculateNumber);
		const result = cal('SUBTRACT', 1, 2);
		assert.equal(cal.calledOnce, true);
		assert.equal(result, -1);
	});
	it('should return differnce of round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT', 1.5, 2);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 0);
	});
	it ('shoudl return differnce if a and round b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT', 1, 2.5);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, -2);
	});
	it ('should return differnce of both round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT', 1.6, 2.2);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 0);
	});
        it ('should return NAN if no argumets passed except type', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT');
                assert.equal(cal.calledOnce, true);
                assert.equal(isNaN(result), true);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal();
                assert.equal(cal.calledOnce, true);
                assert.equal(result, undefined);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal(1, 1);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, undefined);
        });

});


describe('test 1-calcul for devide a and b', function () {
	it ('should return divition of a and b', function () {
		const cal = sinon.spy(calculateNumber);
		const result = cal('DIVIDE', 1, 2);
		assert.equal(cal.calledOnce, true);
		assert.equal(result, 0.5);
	});
	it ('should return division of round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1.5, 2);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 1);
	});
	it ('should return division of a and round b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1, 2.4);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 0.5);
	});
	it ('should return division of both round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1.7, 2.3);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 1);
	});
	it ('should return error when b is round to 0 or is 0', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1, 0.2);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, 'Error');
	});
        it ('should return NAN if no argumets passed except type', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE');
                assert.equal(cal.calledOnce, true);
                assert.equal(isNaN(result), true);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal();
                assert.equal(cal.calledOnce, true);
                assert.equal(result, undefined);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal(1, 1);
                assert.equal(cal.calledOnce, true);
                assert.equal(result, undefined);
        });

});
