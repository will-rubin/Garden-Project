const { create } = require('domain');
const con = require('./db_connect');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )`;

    await con.query(sql);
}

createTable();

async function getAllUsers() {
    let sql = `SELECT * FROM users`;
    return await con.query(sql);
}

module.exports = { getAllUsers };