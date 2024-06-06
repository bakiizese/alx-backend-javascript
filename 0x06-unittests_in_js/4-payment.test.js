const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe ('Test for utils and sendPaymentRequestToApi integration', function () {
	it ('both should return the same result by the same args', function() {
		const stub = sinon.stub(Utils, 'calculateNumber');
		const payment = sinon.spy(sendPaymentRequestToApi);
		const consolespy = sinon.spy(console);
		stub.withArgs('SUM', 100, 20).returns(10);
		const result1 = stub('SUM', 100, 20);
		const result2 = payment(100, 20);
                expect(payment.calledOnce).to.be.true;
		expect(consolespy.log.calledWithExactly('The total is: 10')).to.be.true;
		expect(consolespy.log.callCount).to.be.equal(1);
		expect(result2).to.equal(10);
		expect(result1).to.equal(result2);
		stub.restore();
		consolespy.log.restore();
	});
});
