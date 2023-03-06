import express from 'express';

var app = express();

app.use(express.static('./'));

app.get('/', (req, res) => {
	res.sendFile('index.html', {
		root: './public'
	})
})

app.listen(3000);