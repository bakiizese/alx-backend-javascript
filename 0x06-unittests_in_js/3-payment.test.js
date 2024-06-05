const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe ('Test for utils and sendPaymentRequestToApi integration', function () {
	it ('both should return the same result by the same args', function() {
		const utils = sinon.spy(Utils.calculateNumber);
		const payment = sinon.spy(sendPaymentRequestToApi);
		const result1 = utils('SUM', 10, 10);
		const result2 = payment(10, 10);
                expect(utils.calledOnce).to.be.true;
                expect(utils.calledOnce).to.be.true;
		expect(result1).to.equal(20);
		expect(result1).to.equal(result2);
	})
	it ('both should return the same result by the same args round a', function() {
                const utils = sinon.spy(Utils.calculateNumber);
                const payment = sinon.spy(sendPaymentRequestToApi);
                const result1 = utils('SUM', 10.6, 10);
                const result2 = payment(10.6, 10);
		expect(utils.calledOnce).to.be.true;
		expect(utils.calledOnce).to.be.true;
		expect(result1).to.equal(21);
                expect(result1).to.equal(result2);
        })
        it ('both should return the same result by the same args round b', function() {
                const utils = sinon.spy(Utils.calculateNumber);
                const payment = sinon.spy(sendPaymentRequestToApi);
                const result1 = utils('SUM', 10, 10.4);
                const result2 = payment(10, 10.4);
                expect(utils.calledOnce).to.be.true;
                expect(utils.calledOnce).to.be.true;
		expect(result1).to.equal(20)
                expect(result1).to.equal(result2);
        })
        it ('both should return the same result by the same args both round', function() {
                const utils = sinon.spy(Utils.calculateNumber);
                const payment = sinon.spy(sendPaymentRequestToApi);
                const result1 = utils('SUM', 10.6, 10.4);
                const result2 = payment(10.6, 10.4);
                expect(utils.calledOnce).to.be.true;
                expect(utils.calledOnce).to.be.true;
                expect(result1).to.equal(21)
                expect(result1).to.equal(result2);
        });

});
