const express = require('express');
const router = express.Router();
const Book = require("../models/Book");

router.get("/", (req, res) => {
	// res.json({data: "Hello World GET"});
	Book.find()
		.then(data => {
			res.json(data);
		})
		.catch(e => {
			res.json({message: e});
		});
});

router.post("/", (req, res) => {
	// res.json({data: "Hello World POST"});
	const book = new Book({
		title: req.body.title,
		description: req.body.description
	});
	
	book.save()
		.then(data => {
			res.json(data);
		})
		.catch(e => {
			res.json({message: e});
		});
});

router.delete("/:id", (req, res) => {
	// res.json({data: "Hello World DELETE"});
	Book.deleteOne({_id: req.params.id})
		.then(data => {
			res.json(data);
		})
		.catch(e => {
			res.json({message: e});
		});
});

router.patch("/", (req, res) => {
	// res.json({data: "Hello World PATCH"});
	Book.updateOne({_id: req.body.id},
		{
			$set: {description: req.body.description}
		})
		.then(data => {
			res.json(data);
		})
		.catch(e => {
			res.json({message: e});
		});
});


module.exports = router;
