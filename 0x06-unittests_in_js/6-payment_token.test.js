const { expect } = require('chai');
const sinon = require('sinon');
const api = require('./6-payment_token');

it('getPaymentTokenFromAPI', async function () {
	const result = await api(true);
	await expect(result).to.deep.equal({ data: 'Successful response from the API' });
})
