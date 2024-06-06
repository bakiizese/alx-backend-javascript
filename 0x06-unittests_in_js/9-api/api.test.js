const request = require('request');
const { expect } = require('chai');

describe('test express server', function() {
	it('expect correct response form app', function(done) {
		request.get('http://localhost:7865', function (error, response, body) {
			expect(response.statusCode).to.be.equal(200);
	                expect(body).to.be.equal('Welcome to the payment system');
			done();
		});
	});
        it('expect 404 response form app', function(done) {
                request.get('http://localhost:7865/w', function (error, response, body) {
                        expect(response.statusCode).to.be.equal(404);
                        done();
                });
        });
        it('expect 404 response form app', function(done) {
                request.get('http://localhost:7865/cart/4', function (error, response, body) {
                        expect(response.statusCode).to.be.equal(200);
			expect(body).to.be.equal('Payment methods for cart 4');
                        done();
                });
        });

});
