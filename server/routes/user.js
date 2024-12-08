const express = require("express");
const User = require("../models/user");
const router = express.Router();

router
.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.send(users);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

.get('/userExists', async (req, res) => {
    try {
        const user = await User.userExists(req.query.username);
        res.send(user);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
})

module.exports = router;