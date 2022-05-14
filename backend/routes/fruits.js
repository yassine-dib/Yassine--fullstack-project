const express = require('express')
const router = express.Router()

// Saknas: koppling till Firebase
// OBS: lägg till filen med Firebase-hemligheter i .gitignore
const data = [{name: 'apple', price: 3}, {name: 'orange', price: 2}, {name: 'grapes', price: 300}, {name: 'baNaNa', price: 1}]

// GET /fruits/
router.get('/', (req, res) => {
	res.send(data)
})

// POST /fruits
router.post('/', (req, res) => {
	// Obs! Validera innan ni laddar upp till FireStore
	const newFruit = req.body
	console.log('POST new fruit: ', newFruit)
	data.push(newFruit)
	res.sendStatus(200)
})


module.exports = router
