const express = require('express');
const port = 7865;
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
	const id = req.params.id;
	res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
	const ob = {
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	}
	res.send(ob);
});

app.use(express.json());

app.post('/login', (req, res) => {
	const username = req.body.userName;
	res.send(`Welcome ${username}`);
})

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = app;
