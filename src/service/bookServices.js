const bookData = require('../data/bookData')

exports.getBooks = function () {
    return bookData.getBooks()
}

exports.getBook = function (id) {
    return bookData.getBook(id)
}

exports.saveBook = function (data) {
    return bookData.saveBook(data)
}

exports.updateBook = function (id, data) {
    return bookData.updateBook(id, data)
}

exports.deleteBook = function (id) {
    return bookData.deleteBook(id)
}