const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe ('Test for utils and sendPaymentRequestToApi integration', function () {
	it ('both should return the same result by the same args', function() {
		const stub = sinon.stub(Utils, 'calculateNumber');
		const payment = sinon.spy(sendPaymentRequestToApi);
		const consolespy = sinon.spy(console, 'log');
		stub.withArgs('SUM', 100, 20).returns(10);
		const result1 = stub('SUM', 100, 20);
		const result2 = payment(100, 20);
                expect(payment.calledOnce).to.be.true;
		expect(consolespy.calledWithExactly('The total is: 10')).to.be.true;
		expect(result2).to.equal(10);
		expect(result1).to.equal(result2);
		stub.restore();
	})
	it ('both should return the same result by the same args round a', function() {
                const utils = sinon.spy(Utils.calculateNumber);
                const payment = sinon.spy(sendPaymentRequestToApi);
                const result1 = utils('SUM', 10.6, 10);
                const result2 = payment(10.6, 10);
		expect(payment.calledOnce).to.be.true;
		expect(utils.calledOnce).to.be.true;
		expect(result1).to.equal(21);
                expect(result1).to.equal(result2);
        })
        it ('both should return the same result by the same args round b', function() {
                const utils = sinon.spy(Utils.calculateNumber);
                const payment = sinon.spy(sendPaymentRequestToApi);
                const result1 = utils('SUM', 10, 10.4);
                const result2 = payment(10, 10.4);
                expect(payment.calledOnce).to.be.true;
                expect(utils.calledOnce).to.be.true;
		expect(result1).to.equal(20)
                expect(result1).to.equal(result2);
        })
        it ('both should return the same result by the same args both round', function() {
                const utils = sinon.spy(Utils.calculateNumber);
                const payment = sinon.spy(sendPaymentRequestToApi);
                const result1 = utils('SUM', 10.6, 10.4);
                const result2 = payment(10.6, 10.4);
                expect(payment.calledOnce).to.be.true;
                expect(utils.calledOnce).to.be.true;
                expect(result1).to.equal(21)
                expect(result1).to.equal(result2);
        });

});
