const con = require('./db_connect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Functions to generate and verify JWT tokens
function generateToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}

// Function to create the users table
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

// Create the users table if it doesn't exist
createTable();

// Gets all users from the database
async function getAllUsers() {
    let sql = `SELECT * FROM users`;
    return await con.query(sql);
}

// Function to check if a user exists in the database
async function userExists(username) {
    let sql = `SELECT * FROM users WHERE username = ?`;
    let params = [username];
    if (await con.query(sql, params).length > 0) {
        return true;
    } else {
        return false;
    }   
}

// Login function
async function loginUser(username, password) {
    // Check if the user exists
    if (await userExists(username)) {
        // Get the user's hashed password
        let sql = `SELECT password FROM users WHERE username = ?`;
        let params = [username];
        let hashedPassword = (await con.query(sql, params))[0].password;
        // Compare the user's password with the hashed password
        if (await bcrypt.compare(password, hashedPassword)) {
            return true;
        } else {
            throw new Error('Incorrect password');
        }
    } else {
        throw new Error('User does not exist');
    }
}

// Register function
async function registerUser(username, password, email, location) {
    // Check if the user already exists
    if (await userExists(username)) {
        throw new Error('User already exists');
    }
    // Insert the user into the database
    let sql = `INSERT INTO users (username, password, email, location, date_created) VALUES (?, ?, ?, ?, ?)`;
    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // Hash the user's password
    //const saltRounds = 10;
    //let hashedPassword = await bcrypt.hash(password, saltRounds);
    // Assemble params
    let params = [username, password, email, location, date];
    // Execute the query
    return await con.query(sql, params);
}

// Update function
async function updateUser(username, password, email, location) {
    // Check if the user exists
    if (await userExists(username)) {
        // Update the user's information
        let sql = `UPDATE users SET password = ?, email = ?, location = ? WHERE username = ?`;
        // Hash the user's password
        let hashedPassword = await bcrypt.hash(password, 10);
        // Assemble params
        let params = [hashedPassword, email, location, username];
        // Execute the query
        return await con.query(sql, params);
    } else {
        throw new Error('User does not exist');
    }
}

// Delete function
async function deleteUser(username) {
    // Check if the user exists
    if (await userExists(username)) {
        // Delete the user from the database
        let sql = `DELETE FROM users WHERE username = ?`;
        // Assemble params
        let params = [username];
        // Execute the query
        return await con.query(sql, params);
    } else {
        throw new Error('User does not exist');
    }
}

module.exports = { 
    getAllUsers, 
    loginUser, 
    registerUser,
    updateUser,
    deleteUser,
    generateToken, 
    verifyToken, 
    userExists 
};