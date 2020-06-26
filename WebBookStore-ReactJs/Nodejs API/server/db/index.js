const mysql =  require('mysql')


const pool = mysql.createPool({
    connectionLimit: 10,
    password: '123456',
    user: 'root',
    database: 'bookstore',
    host: 'localhost',
    port: '3306'
})


module.exports = pool;