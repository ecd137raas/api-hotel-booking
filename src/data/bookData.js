const database = require('../infra/database');

exports.getBooks = () => {
    return database.query('select * from hotel.book')
}

exports.getBook = (id) => {
    return database.query(`select * from hotel.book where id= ${id}`)
}

exports.saveBook = (data) => {
    return database.one('insert into hotel.book (name, email, checkin, checkout, type_rooms, price, type_payment, status) values ($1, $2, $3, $4, $5, $6, $7, $8) returning * ', [data.name, data.email, data.checkin, data.checkout, data.type_rooms, data.price, data.type_payment, data.status])
}

exports.updateBook = (id, data) => {
    return database.oneOrNone('update hotel.book set name=$1, email=$2, checkin=$3, checkout=$4, type_rooms=$5, price=$6, type_payment=$7, status=$8 where id=$9', [data.name, data.email, data.checkin, data.checkout, data.type_rooms, data.price, data.type_payment, data.status, id])
}