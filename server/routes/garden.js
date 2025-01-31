const express = require("express");
const Garden = require("../models/garden");
const router = express.Router();

router
.get('/getAllGardens', async (req, res) => {
    try {
        const gardens = await Garden.getAllGardens();
        res.send(gardens);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.get('/readGarden', async (req, res) => {
    try {
        const garden = await Garden.readGarden(req.query.garden_id);
        res.send(garden);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.post('/createGarden', async (req, res) => {
    try {
        const garden = await Garden.createGarden(req.body.sun_level, req.body.location, req.body.owner_id, req.body.garden_name);
        res.send(garden);
        console.log("Garden created by: " + req.body.owner_id + " with garden id: " + garden.garden_id);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.put('/updateGarden', async (req, res) => {
    try {
        const garden = await Garden.updateGarden(req.body.garden_id, req.body.sun_level, req.body.location, req.body.owner_id, req.body.garden_name);
        res.send(garden);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.delete('/deleteGarden', async (req, res) => {
    try {
        const garden = await Garden.deleteGarden(req.body.garden_id);
        res.send(garden);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

module.exports = router;