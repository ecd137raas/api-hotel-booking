const db = require('../infra/database');

exports.getBooks = () => {
    return db.query('select * from hotel.book')
}