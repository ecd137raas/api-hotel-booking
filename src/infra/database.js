const config = require('./config')
const postgree = require('pg-promise')()

const db = postgree({
    user: config.user,
    password: config.password,
    host: config.host,
    port: config.port,
    database: config.database
})

module.exports = db;