const bookData = require('../data/bookData')

exports.getBooks = function () {
    return bookData.getBooks()
}

exports.saveBook = function (data) {
    return bookData.saveBook(data)
}