const con = require('./db_connect');
const bcrypt = require('bcrypt');

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        location VARCHAR(255) NOT NULL,
        date_created DATE NOT NULL
    )`;

    await con.query(sql);
}

createTable();

// Gets all users from the database
async function getAllUsers() {
    let sql = `SELECT * FROM users`;
    return await con.query(sql);
}

// Checks if a user exists in the database
async function userExists(username) {
    let sql = `SELECT * FROM users WHERE username = "${username}"`;
    if (await con.query(sql).length > 0) {
        return true;
    } else {
        return false;
    }   
}

// Login function

// Register function

module.exports = { getAllUsers, userExists };