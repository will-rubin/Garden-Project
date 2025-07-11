const express = require("express");
const Plant = require("../models/plant");
const router = express.Router();

router
.get('/getAllPlants', async (req, res) => {
    try {
        const plants = await Plant.getAllPlants();
        res.send(plants);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.post('/createPlant', async (req, res) => {
    try {
        const plant = await Plant.createPlant(req.body.plant_name, req.body.plant_type, req.body.sun_level, req.body.water_level, req.body.days_to_maturity, req.body.edible, req.body.avg_height, req.body.uploader_id);
        res.send(plant);
        console.log("Plant created. Name: ", req.body.plant_name);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.post('/searchPlantsByName', async (req, res) => {
    try {
        const plants = await Plant.searchPlantsByName(req.body.name);
        res.send(plants);
        console.log("Plants searched. Name: ", req.body.name);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.get('/readPlant', async (req, res) => {
    try {
        const plant = await Plant.readPlant(req.query.plant_id);
        res.send(plant);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.get('/getPlantsByUser', async (req, res) => {
    try {
        const plants = await Plant.getPlantsByUser(req.query.uploader_id);
        res.send(plants);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.put('/updatePlant', async (req, res) => {
    try {
        const plant = await Plant.updatePlant(req.body.plant_id, req.body.plant_name, req.body.plant_type, req.body.sun_level, req.body.water_level, req.body.days_to_maturity, req.body.edible, req.body.avg_height, req.body.uploader_id);
        res.send(plant);
        console.log("Plant updated. Name: ", req.body.plant_name);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.delete('/deletePlant', async (req, res) => {
    try {
        const plant = await Plant.deletePlant(req.body.plant_id);
        res.send(plant);
        console.log("Plant deleted. Name: ", req.body.plant_name);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

module.exports = router;