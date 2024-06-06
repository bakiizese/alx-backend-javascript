const express = require('express');
const port = 7865;
const app = express();

app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
	const id = req.params.id;
	try {
		const idint = parseInt(id);
		res.send('Payment methods for cart ' + idint);

	} catch(err) {
		console.log(err);
	}
});

app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = app;
