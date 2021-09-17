const database = require('../infra/database');

exports.getBooks = function () {
    return database.query('select * from hotel.book')
}

exports.saveBook = function (data) {
    return database.one('insert into hotel.book (name, email, checkin, checkout, type_rooms, price, type_payment, status) values ($1, $2, $3, $4, $5, $6, $7, $8) returning * ', [data.name, data.email, data.checkin, data.checkout, data.type_rooms, data.price, data.type_payment, data.status])
}