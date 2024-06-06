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
                request.get('http://localhost:7865/cart/w', function (error, response, body) {
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
        it('expect 404 response form app', function(done) {
                request.get('http://localhost:7865/cart/-5', function (error, response, body) {
                        expect(response.statusCode).to.be.equal(404);
                        done();
                });
        });
        it('expect 200 response form app', function(done) {
                request.get('http://localhost:7865/available_payments', function (error, response, body) {
                        expect(response.statusCode).to.be.equal(200);
                        expect(JSON.parse(body))
				.to.be.deep.equal({payment_methods:{credit_cards:true,paypal:false}});
                        done();
                });
        });
        it('expect 200 response form app', function(done) {
                request.post('http://localhost:7865/login', {json: {userName: "baki"}}, function (error, response, body) {
                        expect(response.statusCode).to.be.equal(200);
                        expect(body).to.be.equal('Welcome baki');
                        done();
                });
        });


});
