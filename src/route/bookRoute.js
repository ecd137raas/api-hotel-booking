const express = require('express')

const router = express.Router()

const bookServices = require('../service/bookServices')

router.get('/books', async function (req, res) {
    const response = await bookServices.getBooks()
    res.json(response)
})

router.post('/books', async function (req, res) {
    const data = req.body;
    const response = await bookServices.saveBook(data)
    res.json(response)
})

module.exports = router