const express = require('express')

const router = express.Router()

const bookServices = require('../service/bookServices')

router.get('/books', async function (req, res) {
    const response = await bookServices.getBooks()
    res.json(response)
})

router.get('/books/:id', async function (req, res) {
    const response = await bookServices.getBook(req.params.id)
    res.json(response)
})

router.post('/books', async function (req, res) {
    const data = req.body;
    const response = await bookServices.saveBook(data)
    res.json(response)
})

router.put('/books/:id', async function (req, res) {
    const data = req.body;
    const response = await bookServices.updateBook(req.params.id, data)
    res.json(response)
})

module.exports = router