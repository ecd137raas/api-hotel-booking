const express = require('express');
const router = express.Router();

const bookServices = require('../service/bookServices');

router.get('/books', async (req, res) => {
    const books = await bookServices.getBooks()
    res.json(books)
})

module.exports = router