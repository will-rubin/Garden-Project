const express = require('express');
const Weather = require('../models/weather');
const router = express.Router();

router
.get('/getWeather', async (req, res) => {
    console.log("Weather route GET request. Location: ", req.query.location);
    try {
        const weather = await Weather.getWeather(req.query.location);
        res.send(weather);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
});

module.exports = router;