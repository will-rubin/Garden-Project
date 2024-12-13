const con = require('./db_connect')

// Function to create the plants table
async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS plants (
        plant_id INT AUTO_INCREMENT PRIMARY KEY,
        plant_name VARCHAR(255) NOT NULL,
        plant_type VARCHAR(255) NOT NULL,
        sun_level int NOT NULL,
        water_level int NOT NULL,
        days_to_maturity int NOT NULL,
        edible varchar(255) NOT NULL,
        avg_height int NOT NULL,
        uploader_id int NOT NULL,
        CONSTRAINT uploader_id_fk FOREIGN KEY (uploader_id) REFERENCES users(user_id)
        )`
        
    await con.query(sql);
}

//Create the table on project start
createTable();

// Query operations

// Get all plants

async function getAllPlants() {
    let sql = `SELECT * FROM plants`;
    return await con.query(sql);
}

// CRUD Operations

// Create a plant
async function createPlant(plant_name, plant_type, sun_level, water_level, days_to_maturity, edible, avg_height, uploader_id) {
    let sql = `INSERT INTO plants (plant_name, plant_type, sun_level, water_level, days_to_maturity, edible, avg_height, uploader_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    let params = [plant_name, plant_type, sun_level, water_level, days_to_maturity, edible, avg_height, uploader_id];
    return await con.query(sql, params);
}

// Read a plant
async function readPlant(plant_id) {
    let sql = `SELECT * FROM plants WHERE plant_id = ?`;
    let params = [plant_id];
    return await con.query(sql, params);
}

// Update a plant
async function updatePlant(plant_id, plant_name, plant_type, sun_level, water_level, days_to_maturity, edible, avg_height, uploader_id) {
    let sql = `UPDATE plants SET plant_name = ?, plant_type = ?, sun_level = ?, water_level = ?, days_to_maturity = ?, edible = ?, avg_height = ?, uploader_id = ? WHERE plant_id = ?`;
    let params = [plant_name, plant_type, sun_level, water_level, days_to_maturity, edible, avg_height, uploader_id, plant_id];
    return await con.query(sql, params);
}

// Delete a plant
async function deletePlant(plant_id) {
    let sql = `DELETE FROM plants WHERE plant_id = ?`;
    let params = [plant_id];
    return await con.query(sql, params);
}

module.exports = {
    getAllPlants,
    createPlant,
    readPlant,
    updatePlant,
    deletePlant
}