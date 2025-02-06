const con = require('./db_connect')

// Function to create the gardens table
async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS gardens (
        garden_id INT AUTO_INCREMENT PRIMARY KEY,
        garden_name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        sun_level INT NOT NULL,
        owner_id INT NOT NULL,
        CONSTRAINT owner_id_fk FOREIGN KEY (owner_id) REFERENCES users(user_id)
        )`
        
    await con.query(sql);
}

//Create the table on project start
createTable();

// Query operations

// Get all gardens

async function getAllGardens() {
    let sql = `SELECT * FROM gardens`;
    return await con.query(sql);
}

// CRUD Operations

// Create a garden
async function createGarden(sun_level, location, owner_id, garden_name) {
    let sql = `INSERT INTO gardens (sun_level, location, owner_id, garden_name) VALUES (?, ?, ?, ?)`;
    let params = [sun_level, location, owner_id, garden_name];
    return await con.query(sql, params);
}

// Read a garden
async function readGarden(garden_id) {
    let sql = `SELECT * FROM gardens WHERE garden_id = ?`;
    let params = [garden_id];
    return await con.query(sql, params);
}

// Select gardens by owner_id
async function selectGardensByOwnerId(owner_id) {
    let sql = `SELECT * FROM gardens WHERE owner_id = ?`;
    let params = [owner_id];
    return await con.query(sql, params);
}

// Update a garden
async function updateGarden(garden_id, sun_level, location, owner_id, garden_name) {
    let sql = `UPDATE gardens SET sun_level = ?, location = ?, owner_id = ?, garden_name = ? WHERE garden_id = ?`;
    let params = [sun_level, location, owner_id, garden_name, garden_id];
    return await con.query(sql, params);
}

// Delete a garden
async function deleteGarden(garden_id) {
    let sql = `DELETE FROM gardens WHERE garden_id = ?`;
    let params = [garden_id];
    return await con.query(sql, params);
}

module.exports = {
    getAllGardens,
    createGarden,
    readGarden,
    selectGardensByOwnerId,
    updateGarden,
    deleteGarden
}