const { expect } = require('chai');
const sinon = require('sinon');
const calculateNumber = require('./2-calcul_chai');

describe('test 1-calcul for sum, a and b args', function() {
	it('should return sum of a and b', function() {
		const cal = sinon.spy(calculateNumber);
		const result = cal('SUM', 1, 2);
		expect(cal.calledOnce).to.be.true;
		expect(result).to.equal(3);
	});
	it ('should return sum of round a and b', function() {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM', 1.5, 2);
                expect(cal.calledOnce).to.be.true;
		expect(result).to.equal(4);
	});
	it ('should return sum of a and round b', function() {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM', 1, 2.2);
              	expect(cal.calledOnce).to.be.true; 
		expect(result).to.equal(3);
	});
	it ('should return sum of both round a and b', function() {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM', 1.1, 2.5);
                expect(cal.calledOnce).to.be.true;
		expect(result).to.equal(4);
	});
        it ('should return NAN if no argumets passed except type', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUM');
                expect(cal.calledOnce).to.be.true;
                expect(isNaN(result)).to.be.true;
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal();
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(undefined);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal(1, 1);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(undefined);
        });

});


describe('test 1-calcul for subtract', function() {
	it('should return difference of a and b', function () {
		const cal = sinon.spy(calculateNumber);
		const result = cal('SUBTRACT', 1, 2);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(-1);
	});
	it('should return differnce of round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT', 1.5, 2);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(0);
	});
	it ('shoudl return differnce if a and round b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT', 1, 2.5);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(-2);
	});
	it ('should return differnce of both round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT', 1.6, 2.2);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(0);
	});
        it ('should return NAN if no argumets passed except type', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('SUBTRACT');
                expect(cal.calledOnce).to.be.true;
                expect(isNaN(result)).to.be.true;

        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal();
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(undefined);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal(1, 1);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(undefined);
        });

});


describe('test 1-calcul for devide a and b', function () {
	it ('should return divition of a and b', function () {
		const cal = sinon.spy(calculateNumber);
		const result = cal('DIVIDE', 1, 2);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(0.5);
	});
	it ('should return division of round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1.5, 2);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(1);
	});
	it ('should return division of a and round b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1, 2.4);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(0.5);
	});
	it ('should return division of both round a and b', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1.7, 2.3);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(1);
	});
	it ('should return error when b is round to 0 or is 0', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE', 1, 0.2);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal('Error');
	});
        it ('should return NAN if no argumets passed except type', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal('DIVIDE');
                expect(cal.calledOnce).to.be.true;
                expect(isNaN(result)).to.be.true;
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal();
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(undefined);
        });
        it ('should return undefined if no argumets or if type missing', function () {
                const cal = sinon.spy(calculateNumber);
                const result = cal(1, 1);
                expect(cal.calledOnce).to.be.true;
                expect(result).to.equal(undefined);

	});

});
