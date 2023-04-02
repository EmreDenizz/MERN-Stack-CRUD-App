/**
 * @author Emre Deniz <https://github.com/EmreDenizz>
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/books", booksRoute);

mongoose.connect('mongodb://localhost:27017/book_db', (event) => {
	console.log("Connected to DB");
}).catch(e => console.log(e));

/*
app.get('/', (req, res) => {
	res.send("This is get method");
});

app.use("/random", (req, res, next) => {
	console.log("I am a middleware");
	next();
});	 

app.get('/random', (req, res)=>{
	res.send("This is get method - Random");
});

app.post('/', (req, res)=>{
	res.send("This is post method");
});

app.post('/random', (req, res)=>{
	res.send("This is post method - Random");
});
*/

app.listen(4000);
