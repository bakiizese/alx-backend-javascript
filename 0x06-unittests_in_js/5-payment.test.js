const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');

describe('using hook', function() {
	let spyconsole;
	beforeEach(function () {
		spyconsole = sinon.spy(console, 'log');
	});

	afterEach(function() {
		spyconsole.restore();
	});
	it ('spy on console', function() {
		sendPaymentRequestToAPI(100, 20);
		expect(spyconsole.calledWithExactly('The total is: 120')).to.be.true;
		expect(spyconsole.calledOnce).to.be.true;
	});
	it ('spy on console', function() {
                sendPaymentRequestToAPI(10, 10);
                expect(spyconsole.calledWithExactly('The total is: 20')).to.be.true;
                expect(spyconsole.calledOnce).to.be.true;
        });

})
